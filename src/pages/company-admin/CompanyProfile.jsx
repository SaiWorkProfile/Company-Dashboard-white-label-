import {
  FiBriefcase,
  FiMail,
  FiMapPin,
  FiCheckCircle,
  FiShield,
  FiEdit,
  FiSmartphone,
  FiImage,
} from "react-icons/fi";
import "./companyAdmin.css";

export default function CompanyProfile() {
  return (
    <div className="admin-wrapper">
      <div className="grid">

        {/* COMPANY NAME */}
        <ProfileCard
          icon={<FiBriefcase />}
          label="Company Name"
          value="NeuraTalk Pvt Ltd"
          sub="Registered business name"
        />

        {/* COMPANY EMAIL */}
        <ProfileCard
          icon={<FiMail />}
          label="Company Email"
          value="admin@neuratalk.ai"
          sub="Used for app support & backend"
        />

        {/* APP IDENTIFIER */}
        <ProfileCard
          icon={<FiSmartphone />}
          label="App Identifier"
          value="com.neuratalk.app"
          sub="Linked React Native application"
        />

        {/* LOCATION */}
        <ProfileCard
          icon={<FiMapPin />}
          label="Location"
          value="India"
          sub="Company headquarters"
        />

        {/* ACCOUNT STATUS */}
        <ProfileCard
          icon={<FiCheckCircle />}
          label="Account Status"
          value="Active"
          sub="Backend services running"
        />

        {/* SECURITY */}
        <ProfileCard
          icon={<FiShield />}
          label="Security Level"
          value="High"
          sub="Token-based API & encryption"
        />

        {/* APP LOGO */}
        <ProfileActionCard
          icon={<FiImage />}
          label="App Logo"
          sub="Displayed in React Native app"
        />

        {/* EDIT PROFILE */}
        <ProfileActionCard
          icon={<FiEdit />}
          label="Edit Profile"
          sub="Update company & app details"
        />

      </div>
    </div>
  );
}

/* ===============================
   DISPLAY CARD
================================ */
function ProfileCard({ icon, label, value, sub }) {
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
   ACTION CARD
================================ */
function ProfileActionCard({ icon, label, sub }) {
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
