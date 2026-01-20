import {
  FiUsers,
  FiTrendingUp,
  FiActivity,
  FiCpu,
  FiClock,
  FiAlertTriangle,
} from "react-icons/fi";
import "./companyAdmin.css";

export default function Analytics() {
  return (
    <div className="admin-wrapper">
      <div className="grid">

        {/* TOTAL USERS */}
        <AnalyticsCard
          icon={<FiUsers />}
          label="Total Users"
          value="12,480"
          sub="All time"
        />

        {/* DAILY ACTIVE USERS */}
        <AnalyticsCard
          icon={<FiActivity />}
          label="Daily Active Users"
          value="3,214"
          sub="Last 24 hours"
        />

        {/* USER GROWTH */}
        <AnalyticsCard
          icon={<FiTrendingUp />}
          label="User Growth"
          value="+8.2%"
          sub="Last 7 days"
        />

        {/* AI REQUESTS */}
        <AnalyticsCard
          icon={<FiCpu />}
          label="AI Requests"
          value="184,230"
          sub="This month"
        />

        {/* AVG RESPONSE TIME */}
        <AnalyticsCard
          icon={<FiClock />}
          label="Avg Response Time"
          value="620 ms"
          sub="AI responses"
        />

        {/* ERROR RATE */}
        <AnalyticsCard
          icon={<FiAlertTriangle />}
          label="Error Rate"
          value="0.3%"
          sub="System stability"
        />

      </div>
    </div>
  );
}

/* ===============================
   ANALYTICS CARD
================================ */
function AnalyticsCard({ icon, label, value, sub }) {
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
