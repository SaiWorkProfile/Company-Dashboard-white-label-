import {
  FiCpu,
  FiSmile,
  FiMessageCircle,
  FiShield,
  FiGlobe,
  FiDatabase,
  FiToggleLeft,
} from "react-icons/fi";
import "./companyAdmin.css";

export default function AIPersonality() {
  return (
    <div className="admin-wrapper">
      <div className="grid">

        {/* AI MODEL */}
        <AIConfigCard
          icon={<FiCpu />}
          label="AI Model"
          value="NeuraGPT-Pro"
          sub="Primary AI engine"
        />

        {/* PERSONALITY */}
        <AIConfigCard
          icon={<FiSmile />}
          label="Personality"
          value="Friendly & Professional"
          sub="Tone of responses"
        />

        {/* RESPONSE STYLE */}
        <AIConfigCard
          icon={<FiMessageCircle />}
          label="Response Style"
          value="Concise"
          sub="Length & clarity"
        />

        {/* SAFETY LEVEL */}
        <AIConfigCard
          icon={<FiShield />}
          label="Safety Level"
          value="High"
          sub="Content moderation"
        />

        {/* LANGUAGE */}
        <AIConfigCard
          icon={<FiGlobe />}
          label="Supported Language"
          value="English"
          sub="Primary language"
        />

        {/* MEMORY */}
        <AIConfigCard
          icon={<FiDatabase />}
          label="Conversation Memory"
          value="Enabled"
          sub="Context retention"
        />

        {/* FEATURE TOGGLE */}
        <AIActionCard
          icon={<FiToggleLeft />}
          label="Advanced AI Features"
          sub="Enable experimental features"
        />

      </div>
    </div>
  );
}

/* ===============================
   AI CONFIG DISPLAY CARD
================================ */
function AIConfigCard({ icon, label, value, sub }) {
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
   AI ACTION CARD
================================ */
function AIActionCard({ icon, label, sub }) {
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
