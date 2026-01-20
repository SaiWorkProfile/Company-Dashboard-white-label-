import "./Header.css";

export default function Header({ title }) {
  return (
    <header className="header">
      {/* LEFT: TITLE */}
      <h3 className="header-title">{title}</h3>

      {/* RIGHT: ADMIN */}
      <div className="header-right">
        <span className="admin-badge">Admin</span>
      </div>
    </header>
  );
}
