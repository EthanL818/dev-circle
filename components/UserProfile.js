// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div className="card">
      <div className="card-content">
        <img src={user.photoURL || "/avatar.jpg"} className="card-img-center" />
        <p>
          <i>@{user.username}</i>
        </p>
        <h1>{user.displayName || "Anonymous User"}</h1>
      </div>
    </div>
  );
}
