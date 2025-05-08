// di bagian paling atas:
"use client";
import { SignupFormDemo } from "@/components/SignupFormDemo";
import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function Signup() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Gagal mendaftar.");
    } else {
      setMessage("Berhasil daftar! Silakan login.");
    }
  };

  return (
    <div className="relative w-full dark:bg-black bg-white min-h-screen flex items-center justify-center p-4">
      <Navbar className="absolute inset-x-0 top-0 h-16 mb-20">
        <NavBody>
          <Link href="/">
            <NavbarLogo />
          </Link>

          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Link href="/login">
              <NavbarButton variant="secondary">Login</NavbarButton>
            </Link>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>

        <div className="mt-10 flex justify-center">
          <form onSubmit={handleSignup} className="mx-10 mt-20 bg-white p-8 rounded-xl shadow-md w-full max-w-md dark:bg-gray-800 dark:text-white">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full mb-4 p-3 border rounded"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full mb-6 p-3 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Daftar
            </button>
            {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
          </form>
        </div>
      </Navbar>
    </div>
  );
}
