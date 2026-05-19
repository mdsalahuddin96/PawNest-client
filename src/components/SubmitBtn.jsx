"use client";

import { Spinner } from "@heroui/react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ text }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="h-12 rounded-full bg-gradient-to-r from-[#ff7a59] to-[#ffd166] font-semibold text-white shadow-lg transition-all  duration-300 hover:-translate-y-1 hover:shadow-xl"
      disabled={pending}
      type="submit"
    >
      {pending ? "Submitting...": (
        text
      )}
    </button>
  );
}
