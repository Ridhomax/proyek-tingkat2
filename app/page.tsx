"use client";
import React from "react";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import Link from "next/link";
import { CarouselDemo } from "@/components/CarouselDemo";
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
import { useState } from "react";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundGradientDemo } from "@/components/BackgroundGradientDemo";



export default function Home() {


  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Propoerties",
      link: "/properties",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Navbar className="mt-10">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Link href="/login">
              <NavbarButton variant="secondary">Login</NavbarButton>
            </Link>
            <Link href={"/signup"}>
            <NavbarButton variant="primary">Sign up</NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
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
                onClick={() => setIsMobileMenuOpen(true)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
        <div className="pt-6">
          <div className="container mx-auto px-4 text-left">
            <CarouselDemo />
            <HeroScrollDemo/>
            <TextGenerateEffectDemo/>
            <AppleCardsCarouselDemo />
            <div className=" flex flex-col items-center justify-center mt-10">
            <BackgroundGradientDemo/>
            </div>
          </div>
        </div>
        <footer/>
      </Navbar>
      

      {/* Navbar */}
    </div>

  );
}
