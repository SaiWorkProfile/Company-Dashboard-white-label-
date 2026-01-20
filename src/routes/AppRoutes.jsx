import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

import CompanyDashboard from "../pages/company-admin/CompanyDashboard";
import CompanyProfile from "../pages/company-admin/CompanyProfile";
import BrandingSettings from "../pages/company-admin/BrandingSettings";
import AIPersonality from "../pages/company-admin/AIPersonality";
import UserManagement from "../pages/company-admin/UserManagement";
import InviteUser from "../pages/company-admin/InviteUser";
import RolesPermissions from "../pages/company-admin/RolesPermissions";
import BillingUsage from "../pages/company-admin/BillingUsage";
import Analytics from "../pages/company-admin/Analytics";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 ROOT REDIRECT */}
        <Route path="/" element={<Navigate to="/company/dashboard" replace />} />

        {/* 🔥 ADMIN LAYOUT */}
        <Route element={<AdminLayout />}>
          <Route path="/company/dashboard" element={<CompanyDashboard />} />
          <Route path="/company/profile" element={<CompanyProfile />} />
          <Route path="/company/branding" element={<BrandingSettings />} />
          <Route path="/company/ai" element={<AIPersonality />} />
          <Route path="/company/users" element={<UserManagement />} />
          <Route path="/company/invite" element={<InviteUser />} />
          <Route path="/company/roles" element={<RolesPermissions />} />
          <Route path="/company/billing" element={<BillingUsage />} />
          <Route path="/company/analytics" element={<Analytics />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
