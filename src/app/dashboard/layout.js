import Sidebar from "@/components/Sidebar";
import { HamburgerProvider } from "@/providers/HamburgerProvider";
import TopBar from "@/components/TopBar";
import DashboardOverlay from "@/components/DashboardOverlay";
export const metadata = {
  title: "Dashboard",
  description:
    "This is the user dashboard where user can add pet edit, delete, and view request",
};
export default function DashboardLayout({ children }) {
  return (
    <HamburgerProvider>
      <div className="min-h-screen flex bg-[var(--background)] text-[var(--text-primary)]">
        {/* OVERLAY (mobile) */}
        <DashboardOverlay />
        {/* SIDEBAR */}
        <Sidebar />
        {/* MAIN */}
        <main className="flex-1 p-4 md:p-6 ">
          {/* TOP BAR */}
          <TopBar />
          {/* CONTENT */}
          <div className="space-y-6">{children}</div>
        </main>
      </div>
    </HamburgerProvider>
  );
}
