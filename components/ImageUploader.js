import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { auth, storage, STATE_CHANGED } from "../lib/firebase"; // Ensure these are correctly initialized
import Loader from "./Loader";
import toast from "react-hot-toast";

export default function ImageUploader({ onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState(null);

  const uploadFile = async (e) => {
    try {
      // Get the file
      const file = Array.from(e.target.files)[0];
      if (!file) {
        console.error("No file selected");
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
          {onUpload ? (
            <label className="imageUploader">
              🖼️ Upload Cover Image
              <input type="file" onChange={uploadFile} accept="image/*" />
            </label>
          ) : (
            <label className="btn">
              📸 Upload Image
              <input type="file" onChange={uploadFile} accept="image/*" />
            </label>
          )}
        </>
      )}
      {downloadURL && !onUpload && (
        <code className="upload-snippet">{`![alt](${downloadURL})`}</code>
      )}
    </div>
  );
}
