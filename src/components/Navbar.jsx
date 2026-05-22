"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import logo from "@/assets/logo4.png";
import { useSession } from "@/lib/auth-client";
import { Button, Spinner } from "@heroui/react";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";
import { IoLogInOutline } from "react-icons/io5";
import ThemeSwitch from "./ThemeSwitch";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/all-pets", text: "All Pets" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, isPending } = useSession();
  const user = data?.user;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator py-2 navbar-blur ">
      <header className="flex h-16 items-center justify-between px-6 container mx-auto">
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* logo */}
        <Link href={"/"} className="cursor-pointer">
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              alt="logo"
              height={50}
              width={50}
              className="rounded-full hidden md:block"
            />
            <h1 className="gradient-text heading-font text-2xl md:text-3xl font-semibold">
              PawNest
            </h1>
          </div>
        </Link>
        {/* Navlinks */}
        <ul className="hidden items-center gap-4 md:flex">
          {navItems.map((item, ind) => (
            <NavLink key={ind} item={item}></NavLink>
          ))}
        </ul>
        {/* login & logout */}
        <div className="flex items-center gap1.5 md:gap-3">
          <ThemeSwitch />
          {isPending ? (
            <div className="flex flex-col items-center">
              <Spinner color="success" size="lg" />
              <span className="text-primary text-sm">User...</span>
            </div>
          ) : user ? (
            <>
              <ProfileDropdown user={user} />
            </>
          ) : (
            <>
              <Link href={"/signin"}>
                <Button
                  variant="primary"
                  className="btn-secondary cursor-pointer"
                >
                  <IoLogInOutline /> Login
                </Button>
              </Link>
            </>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item, ind) => (
              <NavLink key={ind} item={item}></NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
