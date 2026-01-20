import {
  FiUsers,
  FiUserCheck,
  FiUserPlus,
  FiUserX,
  FiShield,
  FiMail,
} from "react-icons/fi";
import "./companyAdmin.css";

export default function UserManagement() {
  return (
    <div className="admin-wrapper">
      <div className="grid">

        {/* TOTAL USERS */}
        <UserStatCard
          icon={<FiUsers />}
          label="Total Users"
          value="1,248"
          sub="Registered mobile users"
        />

        {/* ACTIVE USERS */}
        <UserStatCard
          icon={<FiUserCheck />}
          label="Active Users"
          value="892"
          sub="Active in last 30 days"
        />

        {/* NEW USERS */}
        <UserStatCard
          icon={<FiUserPlus />}
          label="New Signups"
          value="76"
          sub="Last 7 days"
        />

        {/* BLOCKED USERS */}
        <UserStatCard
          icon={<FiUserX />}
          label="Blocked Users"
          value="12"
          sub="Access restricted"
        />

        {/* ROLES */}
        <UserActionCard
          icon={<FiShield />}
          label="Roles & Permissions"
          sub="Manage access levels"
        />

        {/* INVITE USERS */}
        <UserActionCard
          icon={<FiMail />}
          label="Invite User"
          sub="Send app invitation"
        />

      </div>
    </div>
  );
}

/* ===============================
   USER STATS CARD
================================ */
function UserStatCard({ icon, label, value, sub }) {
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
   USER ACTION CARD
================================ */
function UserActionCard({ icon, label, sub }) {
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
