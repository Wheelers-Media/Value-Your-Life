"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS, PRIMARY_CTA, BRAND } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-50/95 backdrop-blur-md shadow-lg shadow-earth-800/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-brand flex items-center justify-between">
        {/* ── Logo ── */}
        <Link
          href="/"
          id="header-logo"
          className="flex items-center gap-3 group"
        >
          <Image
            src="/images/Logo.png"
            alt={`${BRAND.name} logo`}
            width={48}
            height={48}
            className={`rounded-full transition-all duration-300 ring-2 ring-terracotta-400/30 group-hover:ring-terracotta-400/60 ${
              scrolled ? "w-10 h-10" : "w-12 h-12"
            }`}
            style={{ height: "auto" }}
          />
          <div className="hidden sm:block">
            <span
              className={`block font-serif font-bold leading-tight transition-colors duration-300 ${
                scrolled ? "text-earth-800 text-base" : "text-earth-800 text-lg"
              }`}
            >
              Value Your Life
            </span>
            <span
              className={`block font-accent leading-none transition-colors duration-300 ${
                scrolled
                  ? "text-terracotta-500 text-sm"
                  : "text-terracotta-500 text-base"
              }`}
            >
              Wellness
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className={`relative font-medium text-sm tracking-wide transition-colors duration-300 hover:text-terracotta-500 ${
                scrolled ? "text-earth-700" : "text-earth-700"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-terracotta-400 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.label}
            </Link>
          ))}

          {/* Primary CTA — using <a> directly to avoid button > a nesting */}
          <Link
            href={PRIMARY_CTA.href}
            id="header-cta"
            className="inline-flex items-center justify-center bg-terracotta-500 text-sand-50 hover:bg-terracotta-600 font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 glow-terracotta text-sm"
          >
            {PRIMARY_CTA.label}
          </Link>
        </nav>

        {/* ── Mobile Menu ── */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              id="mobile-menu-toggle"
              className="inline-flex items-center justify-center size-10 rounded-lg text-earth-700 hover:text-terracotta-500 hover:bg-sand-200/50 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-sand-50 border-sand-200"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full pt-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-10 px-2">
                  <Image
                    src="/images/Logo.png"
                    alt={`${BRAND.name} logo`}
                    width={40}
                    height={40}
                    className="rounded-full ring-2 ring-terracotta-400/30"
                    style={{ height: "auto" }}
                  />
                  <div>
                    <span className="block font-serif font-bold text-earth-800 text-base leading-tight">
                      Value Your Life
                    </span>
                    <span className="block font-accent text-terracotta-500 text-sm leading-none">
                      Wellness
                    </span>
                  </div>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      id={`mobile-nav-${link.label.toLowerCase()}`}
                      className="px-4 py-3 rounded-xl text-earth-700 font-medium text-base hover:bg-sand-200/60 hover:text-terracotta-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto pb-8 px-2">
                  <Link
                    href={PRIMARY_CTA.href}
                    id="mobile-cta"
                    className="flex items-center justify-center w-full bg-terracotta-500 text-sand-50 hover:bg-terracotta-600 font-semibold py-3 rounded-full shadow-md text-base transition-colors duration-300"
                  >
                    {PRIMARY_CTA.label}
                  </Link>
                  <p className="text-center text-earth-400 text-xs mt-4">
                    Mental Wellness · Nutrition · Life Coaching
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
