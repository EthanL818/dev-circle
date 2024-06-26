import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { auth, storage, STATE_CHANGED } from "../lib/firebase"; // Ensure these are correctly initialized
import Loader from "./Loader";
import toast from "react-hot-toast";

export default function ImageUploader({ onUpload, type, user }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState(null);

  const uploadFile = async (e) => {
    try {
      // Get the file
      const file = Array.from(e.target.files)[0];
      if (!file) {
        return;
      }

      // Check file size, limit to 2MB
      const fileSize = file.size / 1024 / 1024; // size in MB
      if (fileSize > 2) {
        toast.error("File size exceeds 2MB");
        return;
      }

      // Check file type, ensure it's an image
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (!validImageTypes.includes(file.type)) {
        toast.error("Invalid file type. Only images are allowed!");
        return;
      }

      const extension = file.type.split("/")[1];

      // Make reference to the storage bucket location
      const fileRef = ref(
        storage,
        `uploads/${auth.currentUser.uid}/${Date.now()}.${extension}`
      );
      setUploading(true);

      console.log("Starting upload to:", fileRef.fullPath);

      // Start the upload
      const task = uploadBytesResumable(fileRef, file);

      // Listen to updates to upload task
      task.on(
        STATE_CHANGED,
        (snapshot) => {
          const pct = (
            (snapshot.bytesTransferred / snapshot.totalBytes) *
            100
          ).toFixed(0);
          console.log(`Upload is ${pct}% done`);
          setProgress(pct);
        },
        (error) => {
          console.error("Upload failed:", error);
          setUploading(false);
        },
        async () => {
          try {
            const url = await getDownloadURL(fileRef);
            console.log("File available at:", url);
            setDownloadURL(url);
            if (onUpload) {
              onUpload(url);
            }
          } catch (error) {
            console.error("Failed to get download URL:", error);
          }
          setUploading(false);
        }
      );
    } catch (error) {
      console.error("Error in uploadFile function:", error);
      setUploading(false);
    }
  };

  return (
    <div className="box">
      <Loader show={uploading} />
      {uploading && <h3>{progress}%</h3>}

      {!uploading && (
        <>
          {onUpload && type === "cover" ? (
            <label className="imageUploader">
              🖼️ Upload Cover Image
              <input type="file" onChange={uploadFile} accept="image/*" />
            </label>
          ) : onUpload && type === "profile" ? (
            <div style={{ width: "100%" }}>
              <label className="image-label">
                <img
                  src={user?.photoURL || "/avatar.jpg"}
                  className="card-img-center"
                />
                <div className="overlay">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-upload"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                  </svg>{" "}
                </div>
                <input type="file" onChange={uploadFile} accept="image/*" />
              </label>
            </div>
          ) : (
            <label className="btn">
              📸 Upload Image
              <input type="file" onChange={uploadFile} accept="image/*" />
            </label>
          )}
          {downloadURL && (
            <code className="upload-snippet">{`![alt](${downloadURL})`}</code>
          )}
        </>
      )}
    </div>
  );
}
