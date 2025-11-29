"use client";
import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const params = usePathname();
  console.log(params);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 " : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles
              className="w-5 h-5 text-white"
              fill="white"
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">VidGenie</span>
        </div>

        <div className="hidden md:flex items-center gap-1 p-1 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
          <Link href="/">
            <Button
              variant="ghost"
              className={`${params === "/" ? "bg-white/10 text-white" : ""} rounded-full`}
            >
              Home
            </Button>
          </Link>
          <Link href="/#how-it-works">
            <Button
              variant="ghost"
              className={`${params === "/#how-it-works" ? "bg-white/10 text-white" : ""} rounded-full`}
            >
              How it works
            </Button>
          </Link>
          <Link href="/#features">
            <Button
              variant="ghost"
              className={`${params === "/#features" ? "bg-white/10 text-white" : ""} rounded-full`}
            >
              Features
            </Button>
          </Link>
          <Link href="/#pricing">
            <Button
              variant="ghost"
              className={`${params === "/#pricing" ? "bg-white/10 text-white" : ""} rounded-full`}
            >
              Pricing
            </Button>
          </Link>
          <Link href="/#faq">
            <Button
              variant="ghost"
              className={`${params === "/#faq" ? "bg-white/10 text-white" : ""}rounded-full`}
            >
              FAQ
            </Button>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="primary"
            className="group"
          >
            Learn More
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-10 w-[calc(100%-80px)] rounded-xl bg-background border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a
            href="/"
            className="text-gray-300 hover:text-white"
          >
            Home
          </a>
          <a
            href="/#how-it-works"
            className="text-gray-300 hover:text-white"
          >
            How it works
          </a>
          <a
            href="/#features"
            className="text-gray-300 hover:text-white"
          >
            Features
          </a>
          <a
            href="/#pricing"
            className="text-gray-300 hover:text-white"
          >
            Pricing
          </a>
          <a
            href="/#faq"
            className="text-gray-300 hover:text-white"
          >
            FAQ
          </a>
          <Button
            variant="primary"
            className="w-full"
          >
            Try now
          </Button>

        </div>
      )}
    </nav>
  );
};
