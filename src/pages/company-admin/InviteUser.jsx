import "./companyAdmin.css";

export default function InviteUser() {
  return (
    <div className="page">
      <h2>Invite User</h2>
      <input placeholder="Email Address" />
      <select>
        <option>User</option>
        <option>Admin</option>
      </select>
      <button>Send Invite</button>
    </div>
  );
}
