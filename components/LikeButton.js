import { doc, increment, writeBatch } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../lib/firebase";

// Allows user to like a post
export default function Heart({ postRef }) {
  // Create a reference to likes document
  const likeRef = doc(
    firestore,
    `${postRef.path}/likes/${auth.currentUser.uid}`
  );

  const [likeDoc] = useDocument(likeRef);

  // Create a user-to-post relationship (stores likeCount to post and uid under likes document)
  const addLike = async () => {
    const uid = auth.currentUser.uid;
    const batch = writeBatch(firestore);

    batch.update(postRef, { likeCount: increment(1) });
    batch.set(likeRef, { uid });

    await batch.commit();
  };

  // Remove a user-to-post relationship (removes like to both user and post)
  const removeLike = async () => {
    const batch = writeBatch(firestore);

    batch.update(postRef, { likeCount: increment(-1) });
    batch.delete(likeRef);

    await batch.commit();
  };

  return likeDoc?.exists() ? (
    <button className="like-btn" onClick={removeLike}>
      👎 Remove Like
    </button>
  ) : (
    <button className="like-btn" onClick={addLike}>
      👍 Like
    </button>
  );
}
