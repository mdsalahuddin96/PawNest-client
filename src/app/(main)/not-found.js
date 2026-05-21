"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">

      <div className="glass-card max-w-xl w-full text-center p-10 space-y-6 rounded-[32px]">

        {/* ICON */}
        <div className="text-6xl">🐾</div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold heading-font">
          404 - Page Not Found
        </h1>

        {/* SUBTITLE */}
        <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
          Oops! The page you&apos;re looking for seems to have wandered off like a lost pet.
          Let’s help you find your way back home.
        </p>

        {/* ILLUSTRATION STYLE BLOCK */}
        <div className="relative">

          <div className="absolute -top-10 -left-10 h-32 w-32 bg-[#ff7a59]/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-cyan-400/20 blur-3xl rounded-full" />

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">

          <Link href="/" >
            <button className="btn-primary px-8 py-4 w-full md:w-auto">
              Go Home
            </button>
          </Link>
        </div>

        {/* SMALL TEXT */}
        <p className="text-xs text-[var(--text-light)] pt-2">
          PawNest • Helping pets find loving homes
        </p>

      </div>

    </div>
  );
}