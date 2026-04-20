"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Products",  dropdown: true  },
  { label: "Features",  dropdown: true  },
  { label: "Pricing",   dropdown: false },
  { label: "Resources", dropdown: true  },
  { label: "Careers",   dropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* No background — fully transparent, darkness comes from hero top gradient */}

      {/* Desktop */}
      <div className="relative hidden md:flex items-center h-[68px] px-8">

        {/* Logo */}
        <a href="#" className="mr-12 select-none flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="Sintra"
            width={120}
            height={36}
            className="brightness-0 invert"
            priority
          />
        </a>

        {/* Nav links — left-aligned after logo */}
        <nav className="flex items-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-[2px] px-[18px] py-2 text-[15px] font-normal text-white/85 hover:text-white transition-colors duration-150"
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown size={13} strokeWidth={2} className="opacity-60 mt-[1px] ml-[2px]" />
              )}
            </a>
          ))}
        </nav>

        {/* Push CTAs to far right */}
        <div className="ml-auto flex items-center gap-4">
          <a
            href="#"
            className="text-[15px] text-white/80 hover:text-white transition-colors duration-150 px-2"
          >
            Log in
          </a>
          <a
            href="#"
            className="px-5 py-[9px] rounded-full bg-blue-500 hover:bg-blue-400 text-white text-[15px] font-semibold transition-all duration-150 shadow-[0_2px_20px_rgba(59,130,246,0.35)]"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative flex items-center justify-between px-5 h-[60px] bg-black/90 backdrop-blur-md border-b border-white/5">
        <a href="#" className="select-none">
          <Image src="/logo.webp" alt="Sintra" width={90} height={28} className="brightness-0 invert" />
        </a>
        <button className="text-white/70 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center justify-between py-3 text-white/70 text-[15px] border-b border-white/[0.06]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={14} className="opacity-40" />}
            </a>
          ))}
          <div className="pt-4 space-y-2.5">
            <a href="#" className="block text-center py-2.5 text-white/70 text-sm">Log in</a>
            <a href="#" className="block text-center py-2.5 rounded-full bg-blue-500 text-white font-semibold text-sm">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
