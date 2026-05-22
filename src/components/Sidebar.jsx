"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { GiPawPrint } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import logo from "@/assets/logo4.png";
import { useSession } from "@/lib/auth-client";
import { HamburgerContext } from "@/providers/HamburgerProvider";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const { open, setOpen } = useContext(HamburgerContext);
  const { data, isPending } = useSession();
  const user = data?.user;
  const pathName = usePathname();
  console.log(pathName);
  return (
    <aside
      className={`
          fixed md:sticky top-0 left-0 z-50 h-screen w-[260px]
          bg-[var(--surface)] border-r border-[var(--border-color)]
          flex flex-col justify-between
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
    >
      {/* Logo */}
      <div className="p-6 border-b border-[var(--border-color)]">
        <Link href={"/"} onClick={() => setOpen(false)}>
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              alt="logo"
              height={50}
              width={50}
              className="rounded-full"
            />
            <h1 className="gradient-text heading-font text-3xl font-semibold">
              PawNest
            </h1>
          </div>
        </Link>

        <p className="text-sm text-[var(--text-secondary)]">Dashboard Panel</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href={"/dashboard/my-requests"}
          className={`nav-link flex items-center gap-3 ${
            pathName === "/dashboard/my-requests"
              ? "bg-[linear-gradient(135deg,#ff7a59_0%,#ffb347_100%)] text-white"
              : ""
          }`}
          onClick={() => setOpen(false)}
        >
          <LuHeartHandshake /> My Requests
        </Link>

        <Link
          href="/dashboard/add-pet"
          className={`nav-link flex items-center gap-3 ${
            pathName === "/dashboard/add-pet"
              ? "bg-[linear-gradient(135deg,#ff7a59_0%,#ffb347_100%)] text-white"
              : ""
          }`}
          onClick={() => setOpen(false)}
        >
          <FaPlus /> Add Pet
        </Link>

        <Link
          href="/dashboard/my-listings"
          className={`nav-link flex items-center gap-3 ${
            pathName === "/dashboard/my-listings"
              ? "bg-[linear-gradient(135deg,#ff7a59_0%,#ffb347_100%)] text-white"
              : ""
          }`}
          onClick={() => setOpen(false)}
        >
          <GiPawPrint /> My Listings
        </Link>
      </nav>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-[var(--border-color)]">
        <div className="glass-card p-3 profile">
          <div>
            <p className="text-sm font-semibold">{user?.name}</p>
            <p className="text-xs text-[var(--text-secondary)]">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
