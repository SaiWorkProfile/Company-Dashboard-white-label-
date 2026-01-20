import {
  FiGrid,
  FiBriefcase,
  FiDroplet,
  FiCpu,
  FiUsers,
  FiShield,
  FiCreditCard,
  FiBarChart2,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          NeuraTalk
        </div>

        <nav className="sidebar-menu">
          <NavLink to="/company/dashboard">
            <FiGrid />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/company/profile">
            <FiBriefcase />
            <span>Company Profile</span>
          </NavLink>

          <NavLink to="/company/branding">
            <FiDroplet />
            <span>Branding</span>
          </NavLink>

          <NavLink to="/company/ai">
            <FiCpu />
            <span>AI Settings</span>
          </NavLink>

          <NavLink to="/company/users">
            <FiUsers />
            <span>User Management</span>
          </NavLink>

          <NavLink to="/company/roles">
            <FiShield />
            <span>Roles & Permissions</span>
          </NavLink>

          <NavLink to="/company/billing">
            <FiCreditCard />
            <span>Billing & Usage</span>
          </NavLink>

          <NavLink to="/company/analytics">
            <FiBarChart2 />
            <span>Analytics</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
