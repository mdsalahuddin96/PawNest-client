import Image from "next/image";
import React from "react";
import logo from "@/assets/logo4.png";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-color)] bg-[var(--surface)]">
      {/* TOP GRADIENT */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-primary)]"></div>

      <div className="container-custom px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="PawNest"
                height={100}
                width={100}
                className="h-12 w-12 rounded-full object-cover"
              />

              <h2 className="heading-font text-3xl font-bold">
                <span className="gradient-text">PawNest</span>
              </h2>
            </div>

            <p className="mt-5 leading-relaxed text-[var(--text-secondary)]">
              Connecting loving families with adorable pets waiting for a
              forever home.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-[var(--text-primary)]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-[var(--text-secondary)] transition-all hover:translate-x-1 hover:text-[#ff7a59]"
              >
                Home
              </Link>

              <Link
                href="/all-pets"
                className="text-[var(--text-secondary)] transition-all hover:translate-x-1 hover:text-[#ff7a59]"
              >
                All Pets
              </Link>

              <Link
                href="/about"
                className="text-[var(--text-secondary)] transition-all hover:translate-x-1 hover:text-[#ff7a59]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-[var(--text-secondary)] transition-all hover:translate-x-1 hover:text-[#ff7a59]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT INFO */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-[var(--text-primary)]">
              Contact Info
            </h3>

            <div className="space-y-4">
              <p className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <FaMapMarkerAlt /> Dhaka, Bangladesh
              </p>

              <p className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <MdCall /> +880 01995486917
              </p>

              <p className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <FaEnvelope /> support@pawnest.com
              </p>
            </div>
          </div>

          {/* SOCIAL LINKS */}

          <div>
            <h3 className="mb-5 text-xl font-bold text-[var(--text-primary)]">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-xl text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#59e3d9] hover:text-primary"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-xl text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#59e3d9] hover:text-primary"
              >
                <BsTwitter />
              </Link>
              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-xl text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#59e3d9] hover:text-primary"
              >
                <BsLinkedin/>
              </Link>
              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-xl text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#59e3d9] hover:text-primary"
              >
                <FaFacebook/>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border-color)] pt-6 text-center md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[var(--text-secondary)]">
            © 2026 PawNest. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">
            <a
              href="#"
              className="text-sm text-[var(--text-secondary)] transition hover:text-[#ff7a59]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-[var(--text-secondary)] transition hover:text-[#ff7a59]"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
