import { FiMenu } from "react-icons/fi";
import "./Header.css";

export default function Header({ title, onMenuClick }) {
  return (
    <header className="header">
      {/* MOBILE ONLY */}
      <button className="menu-btn" onClick={onMenuClick}>
        <FiMenu />
      </button>

      <h3 className="header-title">{title}</h3>

      <span className="admin-badge">Admin</span>
    </header>
  );
}
