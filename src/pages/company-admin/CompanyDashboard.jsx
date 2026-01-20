import {
  FiUsers,
  FiActivity,
  FiCpu,
  FiTrendingUp,
} from "react-icons/fi";
import "./companyAdmin.css";

export default function CompanyDashboard() {
  return (
    <div className="admin-wrapper">

      {/* KPI CARDS */}
      <div className="grid">
        <DashboardCard
          icon={<FiUsers />}
          label="Total Users"
          value="48"
          sub="All company users"
        />
        <DashboardCard
          icon={<FiActivity />}
          label="Active Users"
          value="31"
          sub="Last 24 hours"
        />
        <DashboardCard
          icon={<FiCpu />}
          label="AI Requests"
          value="12,430"
          sub="This month"
        />
        <DashboardCard
          icon={<FiTrendingUp />}
          label="Usage"
          value="72%"
          sub="Plan limit"
        />
      </div>

      {/* SECOND ROW */}
      <div className="grid" style={{ marginTop: "14px" }}>
        <DashboardCard
          label="Plan"
          value="PRO"
          sub="Current subscription"
        />
        <DashboardCard
          label="Next Billing"
          value="₹3,400"
          sub="Estimated"
        />
        <DashboardCard
          label="AI Status"
          value="Healthy"
          sub="No issues"
        />
        <DashboardCard
          label="Company Status"
          value="Active"
          sub="All systems normal"
        />
      </div>
    </div>
  );
}

/* ===============================
   SINGLE DASHBOARD CARD
================================ */
function DashboardCard({ icon, label, value, sub }) {
  return (
    <div className="card">
      <div className="card-content">
        {icon && <div className="icon">{icon}</div>}
        <div className="metric">{value}</div>
        <div className="label">{label}</div>
        <div className="sub">{sub}</div>
      </div>
    </div>
  );
}
