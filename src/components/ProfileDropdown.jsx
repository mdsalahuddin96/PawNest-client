"use client";
import { signOut } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function ProfileDropdown({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.refresh();
  };
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" profile  flex items-center gap-3 px-3 py-1 shadow-lg backdrop-blur-xl rounded-full ransition-all duration-300
            hover:scale-[1.02]
            hover:shadow-xl  
          "
      >
        <Avatar>
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            height={40}
            width={40}
            className="rounded-full"
          />
          <Avatar.Fallback>
            {user?.name.charAt(0).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
        <div className="hidden text-left sm:block">
          <h4 className="text-sm font-semibold text-[var(--text-primary)]">
            {`${user?.name.charAt(0).toUpperCase()}${user?.name.slice(1, 2).toLowerCase()}`}
          </h4>
          <p className="text-xs text-[var(--text-secondary)]">Pet Lover</p>
        </div>
        {isOpen ? (
          <BiChevronUp size={20} className="text-primary" />
        ) : (
          <BiChevronDown size={20} className="text-primary" />
        )}
      </div>
      {/* menu */}
      <div
        className={`min-w-[240px] rounded-3xl
          border
          border-[var(--border-color)]
          bg-[var(--surface)]
          p-2
          shadow-2xl
          backdrop-blur-xl
          absolute
          -top-80
          right-3
          ${isOpen && "top-17"}
        `}
      >
        <div className=" rounded-2xl px-3 py-3 opacity-100">
          <div className="flex items-center gap-3">
            <div>
              <h3
                className="
                    font-semibold
                    text-[var(--text-primary)]
                  "
              >
                {user?.name}
              </h3>
              <p
                className="
                    text-sm
                    text-[var(--text-secondary)]"
              >
                {user.email}
              </p>
            </div>
          </div>
        </div>
        <Link href={'/dashboard'} className="cursor-pointer">
          <div className="px-3 py-2  text-[var(--text-primary)] transition-all duration-300 profile rounded-full">
            Dashboard
          </div>
        </Link>

        <div
          className="rounded-full px-3 py-2  text-red-500 transition-all duration-300 profile"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
}
