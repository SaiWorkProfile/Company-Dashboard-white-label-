import {
  FiGrid,
  FiBriefcase,
  FiDroplet,
  FiCpu,
  FiUsers,
  FiShield,
  FiCreditCard,
  FiBarChart2,
  FiX,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* OVERLAY (MOBILE) */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="logo">NeuraTalk</span>
          <FiX className="close-btn" onClick={onClose} />
        </div>

        <nav className="sidebar-menu">
          <NavLink to="/company/dashboard" onClick={onClose}><FiGrid /> Dashboard</NavLink>
          <NavLink to="/company/profile" onClick={onClose}><FiBriefcase /> Profile</NavLink>
          <NavLink to="/company/branding" onClick={onClose}><FiDroplet /> Branding</NavLink>
          <NavLink to="/company/ai" onClick={onClose}><FiCpu /> AI Settings</NavLink>
          <NavLink to="/company/users" onClick={onClose}><FiUsers /> Users</NavLink>
          <NavLink to="/company/roles" onClick={onClose}><FiShield /> Roles</NavLink>
          <NavLink to="/company/billing" onClick={onClose}><FiCreditCard /> Billing</NavLink>
          <NavLink to="/company/analytics" onClick={onClose}><FiBarChart2 /> Analytics</NavLink>
        </nav>
      </aside>
    </>
  );
}
