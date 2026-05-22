"use client";

import { HamburgerContext } from "@/providers/HamburgerProvider";
import { useContext } from "react";

const DashboardOverlay = () => {
  const { open, setOpen } = useContext(HamburgerContext);
  return (
    <div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardOverlay;
