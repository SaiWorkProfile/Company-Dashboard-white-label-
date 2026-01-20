import {
  FiImage,
  FiType,
  FiDroplet,
  FiMoon,
  FiSmartphone,
} from "react-icons/fi";
import "./companyAdmin.css";

export default function BrandingSettings() {
  return (
    <div className="admin-wrapper">
      <div className="grid">

        {/* APP NAME */}
        <BrandCard
          icon={<FiType />}
          label="App Name"
          value="NeuraTalk"
          sub="Displayed in mobile app"
        />

        {/* APP LOGO */}
        <BrandActionCard
          icon={<FiImage />}
          label="App Logo"
          sub="Used in splash & header"
        />

        {/* PRIMARY COLOR */}
        <BrandCard
          icon={<FiDroplet />}
          label="Primary Color"
          value="#6FB1FF"
          sub="Main app color"
        />

        {/* ACCENT COLOR */}
        <BrandCard
          icon={<FiDroplet />}
          label="Accent Color"
          value="#22C55E"
          sub="Buttons & highlights"
        />

        {/* THEME MODE */}
        <BrandCard
          icon={<FiMoon />}
          label="Theme Mode"
          value="Dark"
          sub="App appearance"
        />

        {/* PREVIEW */}
        <BrandActionCard
          icon={<FiSmartphone />}
          label="Preview in App"
          sub="View branding in RN app"
        />

      </div>
    </div>
  );
}

function BrandCard({ icon, label, value, sub }) {
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

function BrandActionCard({ icon, label, sub }) {
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
