import {
  FiCreditCard,
  FiTrendingUp,
  FiCpu,
  FiCalendar,
  FiCheckCircle,
  FiArrowUp,
} from "react-icons/fi";
import "./companyAdmin.css";

export default function BillingUsage() {
  return (
    <div className="admin-wrapper">
      <div className="grid">

        {/* CURRENT PLAN */}
        <BillingCard
          icon={<FiCreditCard />}
          label="Current Plan"
          value="PRO"
          sub="Monthly subscription"
        />

        {/* BILLING STATUS */}
        <BillingCard
          icon={<FiCheckCircle />}
          label="Billing Status"
          value="Active"
          sub="No payment issues"
        />

        {/* NEXT BILLING DATE */}
        <BillingCard
          icon={<FiCalendar />}
          label="Next Billing Date"
          value="25 Oct 2026"
          sub="Auto-renew enabled"
        />

        {/* AI USAGE */}
        <BillingCard
          icon={<FiCpu />}
          label="AI Usage"
          value="72%"
          sub="Of monthly quota"
        />

        {/* REQUESTS USED */}
        <BillingCard
          icon={<FiTrendingUp />}
          label="Requests Used"
          value="72,430"
          sub="This billing cycle"
        />

        {/* UPGRADE PLAN */}
        <BillingActionCard
          icon={<FiArrowUp />}
          label="Upgrade Plan"
          sub="Increase limits & features"
        />

      </div>
    </div>
  );
}

/* ===============================
   BILLING DISPLAY CARD
================================ */
function BillingCard({ icon, label, value, sub }) {
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
   BILLING ACTION CARD
================================ */
function BillingActionCard({ icon, label, sub }) {
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
