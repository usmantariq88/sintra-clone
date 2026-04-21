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
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      {/* ── Desktop nav (md+) ─────────────────────────────────────────── */}
      <div
        className="hidden lg:flex"
        style={{
          position: "relative",
          alignItems: "center",
          height: "68px",
          paddingLeft: "clamp(20px, 5vw, 72px)",
          paddingRight: "clamp(20px, 5vw, 72px)",
        }}
      >
        <a href="#" style={{ marginRight: "48px", flexShrink: 0, display: "block", lineHeight: 0 }}>
          <Image
            src="/logo.webp"
            alt="Sintra"
            width={92}
            height={24}
            priority
            style={{
              filter: "grayscale(1) invert(1)",
              objectFit: "contain",
              width: "92px",
              height: "24px",
              display: "block",
            }}
          />
        </a>

        <nav style={{ display: "flex", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                padding: "8px 18px",
                fontSize: "18px",
                fontWeight: 400,
                letterSpacing: "-0.05px",
                lineHeight: "27px",
                color: "#fff",
                textDecoration: "none",
                transition: "opacity 0.15s ease",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown size={13} strokeWidth={2} style={{ opacity: 0.6, marginTop: "1px" }} />
              )}
            </a>
          ))}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
          <a
            href="#"
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#fff",
              textDecoration: "none",
              padding: "8px 18px",
              letterSpacing: "-0.05px",
              lineHeight: "27px",
              fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Log in
          </a>

          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#3b82f6",
              color: "#fff",
              fontSize: "17px",
              fontWeight: 500,
              letterSpacing: "-0.34px",
              lineHeight: "24px",
              padding: "6px 14px",
              borderRadius: "1600px",
              height: "36px",
              minHeight: "36px",
              border: "1px solid #3b82f6",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              whiteSpace: "nowrap",
              columnGap: "8px",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#60a5fa")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#3b82f6")}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* ── Mobile top bar (< md) ────────────────────────────────────── */}
      {/* hamburger LEFT  |  logo RIGHT — matches the design screenshot */}
      <div
        className="lg:hidden flex"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: "60px",
        }}
      >
        <button
          aria-label="Toggle menu"
          style={{
            color: "#fff",
            padding: "4px",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="#" style={{ display: "block", lineHeight: 0 }}>
          <Image
            src="/logo.webp"
            alt="Sintra"
            width={92}
            height={24}
            priority
            style={{ filter: "grayscale(1) invert(1)", objectFit: "contain", width: "92px", height: "24px" }}
          />
        </a>
      </div>

      {/* ── Mobile drawer ───────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: "rgba(0,0,0,0.96)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "0 20px 20px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 0",
                color: "rgba(255,255,255,0.85)",
                fontSize: "17px",
                fontWeight: 400,
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={15} style={{ opacity: 0.5 }} />}
            </a>
          ))}
          <div style={{ paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="#"
              style={{
                textAlign: "center",
                padding: "12px",
                color: "rgba(255,255,255,0.85)",
                fontSize: "16px",
                fontWeight: 400,
                textDecoration: "none",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              }}
            >
              Log in
            </a>
            <a
              href="#"
              style={{
                textAlign: "center",
                padding: "14px",
                borderRadius: "1600px",
                background: "#3b82f6",
                color: "#fff",
                fontWeight: 500,
                fontSize: "16px",
                textDecoration: "none",
                fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
