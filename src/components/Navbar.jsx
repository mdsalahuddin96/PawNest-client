"use client";
import Link from "next/link";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import NavLink from "./NavLink";
import logo from "@/assets/logo4.png";
// import { signOut, useSession } from "@/lib/auth-client";
import { Button, Spinner } from "@heroui/react";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";
import { IoLogInOutline } from "react-icons/io5";

// import { useRouter } from "next/navigation";
const navItems = [
  { href: "/", text: "Home" },
  { href: "/all-pets", text: "All Pets" },
  { href: "/my-requests", text: "My Requests" },
  { href: "/add-pet", text: "Add Pet" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPending = false;
  const user = false;
  //   const { data, isPending } = useSession();
  //   const router=useRouter()
  //   const user = data?.user;
  //   const handleLogout = async () => {
  //     await signOut();
  //     router.refresh()
  //   };
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
        {/* Navlinks */}
        <ul className="hidden items-center gap-4 md:flex">
          {navItems.map((item, ind) => (
            <NavLink key={ind} item={item}></NavLink>
          ))}
        </ul>
        {/* login & logout */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="flex flex-col items-center">
              <Spinner color="success" size="sm" />
            </div>
          ) : user ? (
            <>
              <ProfileDropdown />
            </>
          ) : (
            <>
              <Button variant="primary" className='btn-secondary'><IoLogInOutline/> Login</Button>
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
