import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./AdminLayout.css";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const titles = {
    "/company/dashboard": "Company Dashboard",
    "/company/profile": "Company Profile",
    "/company/branding": "Branding Settings",
    "/company/ai": "AI Settings",
    "/company/users": "User Management",
    "/company/roles": "Roles & Permissions",
    "/company/billing": "Billing & Usage",
    "/company/analytics": "Analytics",
  };

  return (
    <div className="admin-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-area">
        <Header
          title={titles[location.pathname]}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
