"use client";
import ThemeSwitch from "@/components/ThemeSwitch";
import { signOut } from "@/lib/auth-client";
import { HamburgerContext } from "@/providers/HamburgerProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
const TopBar = () => {
  const { open, setOpen } = useContext(HamburgerContext);
   const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.refresh();
  };
  return (
    <div className="flex items-center justify-between mb-8">
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-2xl px-3 py-1 rounded-md bg-[var(--surface)] border border-[var(--border-color)]"
      >
        ☰
      </button>
      <h2 className="text-xl md:text-3xl font-bold heading-font">Dashboard</h2>
      <div className="flex items-center gap-5 ">
        <ThemeSwitch />
        <button className="btn-secondary cursor-pointer" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
