"use client";
import { Avatar } from "@heroui/react";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="
            profile
            flex
            items-center
            gap-3
            px-3
            py-1
            shadow-lg
            backdrop-blur-xl
            rounded-full
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-xl  
          "
      >
        <Avatar>
          <Avatar.Image
            alt="John Doe"
            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            height={40}
            width={40}
            className="rounded-xl"
          />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
        <div className="hidden text-left sm:block">
          <h4
            className="
                text-sm
                font-semibold
                text-[var(--text-primary)]
              "
          >
            Md
          </h4>
          <p
            className="
                text-xs
                text-[var(--text-secondary)]
              "
          >
            Pet Lover
          </p>
        </div>
        {isOpen ? (
          <BiChevronUp
            size={20}
            className="
              text-[#718096]
            "
          />
        ) : (
          <BiChevronDown
            size={20}
            className="
              text-[#718096]
            "
          />
        )}
      </div>
      {/* menu */}
      <div
        className={`
          min-w-[240px]
          rounded-3xl
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
        <div
          className="
              rounded-2xl
              px-3
              py-3
              opacity-100
            "
        >
          <div className="flex items-center gap-3">
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                height={40}
                width={40}
                className="rounded-xl"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>

            <div>
              <h3
                className="
                    font-semibold
                    text-[var(--text-primary)]
                  "
              >
                Md Salauddin
              </h3>
              <p
                className="
                    text-sm
                    text-[var(--text-secondary)]"
              >
                salauddin@example.com
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            px-3
            py-3
            text-[var(--text-primary)]
            transition-all
            duration-300
            profile
            rounded-full
            "
        >
          Dashboard
        </div>

        <div
          className="
            rounded-full
            px-3
            py-3
            text-red-500
            transition-all
            duration-300
            profile
          "
        >
          Logout
        </div>
      </div>
    </div>
  );
}
