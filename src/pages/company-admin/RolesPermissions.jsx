import {
  FiShield,
  FiUser,
  FiUsers,
  FiLock,
  FiSettings,
  FiKey,
} from "react-icons/fi";
import "./companyAdmin.css";

export default function RolesPermissions() {
  return (
    <div className="admin-wrapper">
      <div className="grid">

        {/* ADMIN ROLE */}
        <RoleCard
          icon={<FiShield />}
          label="Admin"
          value="Full Access"
          sub="All permissions enabled"
        />

        {/* MODERATOR ROLE */}
        <RoleCard
          icon={<FiUsers />}
          label="Moderator"
          value="Limited Admin"
          sub="Manage users & content"
        />

        {/* STANDARD USER */}
        <RoleCard
          icon={<FiUser />}
          label="User"
          value="App Access"
          sub="Standard app features"
        />

        {/* READ ONLY */}
        <RoleCard
          icon={<FiLock />}
          label="Read Only"
          value="View Access"
          sub="No write permissions"
        />

        {/* PERMISSION SETTINGS */}
        <RoleActionCard
          icon={<FiSettings />}
          label="Permission Rules"
          sub="Configure access control"
        />

        {/* API ACCESS */}
        <RoleActionCard
          icon={<FiKey />}
          label="API Access Control"
          sub="Token-based permissions"
        />

      </div>
    </div>
  );
}

/* ===============================
   ROLE DISPLAY CARD
================================ */
function RoleCard({ icon, label, value, sub }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="icon">{icon}</div>
        <div className="metric">{value}</div>
        <div className="label">{label}</div>
        <div className="sub">{sub}</div>
      </div>
    </div>
  );
}

/* ===============================
   ROLE ACTION CARD
================================ */
function RoleActionCard({ icon, label, sub }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="icon">{icon}</div>
        <div className="label">{label}</div>
        <div className="sub">{sub}</div>
      </div>
    </div>
  );
}
