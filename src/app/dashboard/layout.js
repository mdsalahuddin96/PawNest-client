"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "@/components/ThemeSwitch";
import logo from '@/assets/logo4.png'

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--text-primary)]">

      {/* OVERLAY (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
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

          <p className="text-sm text-[var(--text-secondary)]">
            Dashboard Panel
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="/dashboard/requests"
            className="nav-link flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            📨 My Requests
          </a>

          <a
            href="/dashboard/add-pet"
            className="nav-link flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            ➕ Add Pet
          </a>

          <a
            href="/dashboard/listings"
            className="nav-link flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            🐶 My Listings
          </a>
        </nav>

        {/* Bottom Profile */}
        <div className="p-4 border-t border-[var(--border-color)]">
          <div className="glass-card p-3 flex items-center gap-3 profile">
            <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold">
              U
            </div>
            <div>
              <p className="text-sm font-semibold">User Name</p>
              <p className="text-xs text-[var(--text-secondary)]">
                user@email.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-4 md:p-6 ">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl px-3 py-1 rounded-md bg-[var(--surface)] border border-[var(--border-color)]"
          >
            ☰
          </button>

          <h2 className="text-xl md:text-3xl font-bold heading-font">
            Dashboard
          </h2>

          <ThemeSwitch />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}