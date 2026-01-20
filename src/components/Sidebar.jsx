export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* your menu items */}
      </aside>
    </>
  );
}
