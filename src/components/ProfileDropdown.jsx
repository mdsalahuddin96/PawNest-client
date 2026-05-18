"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@heroui/react";
import { CiSettings } from "react-icons/ci";
import { BiChevronDown, BiLogOut } from "react-icons/bi";

export default function ProfileDropdown() {
  return (
    <div>
      <div
        className="
            flex
            items-center
            gap-3
            profile
            px-3
            py-1
            shadow-lg
            backdrop-blur-xl
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
                text-[#2d3748]
                dark:text-white
              "
          >
            Md
          </h4>
          <p
            className="
                text-xs
                text-[#718096]
                dark:text-gray-400
              "
          >
            Pet Lover
          </p>
        </div>
        <BiChevronDown
          size={18}
          className="
              text-[#718096]
              transition-transform
              duration-300
            "
        />
      </div>

      <Dropdown placement="bottom-end">
        {/* <DropdownTrigger>
          <button
            className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/20
            bg-white/70
            dark:bg-[#111827]/80
            px-3
            py-2
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-xl
          "
          >
    

            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              className="
              h-10
              w-10
              ring-2
              ring-[#ff7a59]/30
            "
            />

  

            <div className="hidden text-left sm:block">
              <h4
                className="
                text-sm
                font-semibold
                text-[#2d3748]
                dark:text-white
              "
              >
                Md Salauddin
              </h4>

              <p
                className="
                text-xs
                text-[#718096]
                dark:text-gray-400
              "
              >
                Pet Lover
              </p>
            </div>


            <BiChevronDown
              size={18}
              className="
              text-[#718096]
              transition-transform
              duration-300
            "
            />
          </button>
        </DropdownTrigger> */}

        {/* <DropdownMenu
          aria-label="User Actions"
          className="
          min-w-[240px]

          rounded-3xl

          border
          border-white/10

          bg-white/80
          dark:bg-[#111827]/90

          p-2

          shadow-2xl
          backdrop-blur-xl
        "
        >
          <DropdownSection showDivider>
         

            <DropdownItem
              key="profile"
              isReadOnly
              className="
              rounded-2xl
              px-3
              py-3
              opacity-100
            "
            >
              <div className="flex items-center gap-3">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  className="
                  h-12
                  w-12
                  ring-2
                  ring-[#ff7a59]/30
                "
                />

                <div>
                  <h3
                    className="
                    font-semibold
                    text-[#2d3748]
                    dark:text-white
                  "
                  >
                    Md Salauddin
                  </h3>

                  <p
                    className="
                    text-sm
                    text-[#718096]
                    dark:text-gray-400
                  "
                  >
                    salauddin@example.com
                  </p>
                </div>
              </div>
            </DropdownItem>
          </DropdownSection>

 

          <DropdownItem
            key="settings"
            startContent={<CiSettings size={18} className="text-[#ff7a59]" />}
            className="
            rounded-2xl
            px-3
            py-3

            text-[#2d3748]
            dark:text-white

            transition-all
            duration-300

            hover:bg-[#fff1e6]
            dark:hover:bg-[#1e293b]
          "
          >
            Settings
          </DropdownItem>

          <DropdownItem
            key="logout"
            color="danger"
            startContent={<BiLogOut size={18} className="text-red-500" />}
            className="
            rounded-2xl
            px-3
            py-3

            text-red-500

            transition-all
            duration-300

            hover:bg-red-50
            dark:hover:bg-red-500/10
          "
          >
            Logout
          </DropdownItem>
        </DropdownMenu> */}
      </Dropdown>
    </div>
  );
}
