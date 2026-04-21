"use client";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const agents = [
  { role: "Social Media Manager", name: "Soshie",  img: "/helpers/soshie.avif"  },
  { role: "Customer Support",     name: "Cassie",  img: "/helpers/cassie.avif"  },
  { role: "Data Analyst",         name: "Dexter",  img: "/helpers/dexter.avif"  },
  { role: "Business Strategist",  name: "Buddy",   img: "/helpers/buddy.avif"   },
  { role: "Email Marketer",       name: "Emmie",   img: "/helpers/emmie.avif"   },
  { role: "Personal Growth",      name: "Gigi",    img: "/helpers/gigi.avif"    },
  { role: "Recruiter",            name: "Scouty",  img: "/helpers/scouty.avif"  },
  { role: "Copywriter",           name: "Penn",    img: "/helpers/penn.avif"    },
  { role: "eCom Specialist",      name: "Commet",  img: "/helpers/commet.avif"  },
  { role: "Sales Strategist",     name: "Milli",   img: "/helpers/milli.avif"   },
  { role: "SEO Mastermind",       name: "Seomi",   img: "/helpers/seomi.avif"   },
  { role: "Virtual Assistant",    name: "Vizzy",   img: "/helpers/vizzy.avif"   },
];

const navLinks = [
  { label: "Products",  dropdown: true  },
  { label: "Features",  dropdown: true  },
  { label: "Pricing",   dropdown: false },
  { label: "Resources", dropdown: true  },
  { label: "Careers",   dropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const featuresTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openProducts() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 80);
  }

  function openFeatures() {
    if (featuresTimer.current) clearTimeout(featuresTimer.current);
    setFeaturesOpen(true);
  }
  function scheduleCloseFeatures() {
    featuresTimer.current = setTimeout(() => setFeaturesOpen(false), 80);
  }

  function openResources() {
    if (resourcesTimer.current) clearTimeout(resourcesTimer.current);
    setResourcesOpen(true);
  }
  function scheduleCloseResources() {
    resourcesTimer.current = setTimeout(() => setResourcesOpen(false), 80);
  }

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
      {/* ── Desktop nav (lg+) ─────────────────────────────────────────── */}
      <div
        className="hidden lg:flex"
        style={{
          position: "relative",
          alignItems: "center",
          height: "68px",
          paddingLeft: "clamp(20px, 5vw, 120px)",
          paddingRight: "clamp(20px, 5vw, 120px)",
          paddingTop: "12px",
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

        <nav style={{ display: "flex", alignItems: "center", position: "relative" }}>
          {navLinks.map((link) => {
            const isProducts  = link.label === "Products";
            const isFeatures  = link.label === "Features";
            const isResources = link.label === "Resources";
            const isOpen = (isProducts && productsOpen) || (isFeatures && featuresOpen) || (isResources && resourcesOpen);
            return (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={isProducts ? openProducts : isFeatures ? openFeatures : isResources ? openResources : undefined}
                onMouseLeave={isProducts ? scheduleClose : isFeatures ? scheduleCloseFeatures : isResources ? scheduleCloseResources : undefined}
              >
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    padding: "8px 18px",
                    fontSize: "17px",
                    fontWeight: 400,
                    letterSpacing: "-0.05px",
                    lineHeight: "27px",
                    color: "#fff",
                    textDecoration: "none",
                    fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
                    transition: link.dropdown ? undefined : "opacity 0.15s ease",
                  }}
                  onMouseEnter={!link.dropdown ? e => (e.currentTarget.style.opacity = "0.6") : undefined}
                  onMouseLeave={!link.dropdown ? e => (e.currentTarget.style.opacity = "1") : undefined}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: "14px",
                        height: "14px",
                        flexShrink: 0,
                        transition: "transform 0.25s ease",
                        transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5303 13.0303C15.2374 13.3232 14.7626 13.3232 14.4697 13.0303L11.7324 10.2931C11.3276 9.8883 11.0555 9.61703 10.8292 9.42491C10.6096 9.23847 10.4829 9.17101 10.3863 9.13961C10.1352 9.05803 9.86478 9.05803 9.61373 9.13961C9.51706 9.17101 9.39038 9.23847 9.17076 9.42491C8.94445 9.61704 8.67236 9.8883 8.26759 10.2931L5.53033 13.0303C5.23744 13.3232 4.76256 13.3232 4.46967 13.0303C4.17678 12.7374 4.17678 12.2626 4.46967 11.9697L7.20693 9.23241L7.22846 9.21088C7.60615 8.83317 7.9214 8.51791 8.2 8.2814C8.49056 8.03473 8.79021 7.82999 9.1502 7.71302C9.70252 7.53356 10.2975 7.53356 10.8498 7.71302C11.2098 7.82999 11.5094 8.03473 11.8 8.2814C12.0786 8.51791 12.3939 8.83318 12.7715 9.21089L12.7931 9.23241L15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </a>

                {/* Features dropdown */}
                {isFeatures && featuresOpen && (
                  <div
                    onMouseEnter={openFeatures}
                    onMouseLeave={scheduleCloseFeatures}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "auto",
                      minWidth: "160px",
                      whiteSpace: "nowrap",
                      background: "#fff",
                      borderRadius: "16px",
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "6px",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      zIndex: 100,
                    }}
                  >
                    {[{ label: "Brain AI", href: "/features/brain-ai" }, { label: "Integrations", href: "/integrations" }].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        style={{
                          display: "block",
                          padding: "12px 24px",
                          borderRadius: "10px",
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#111",
                          textDecoration: "none",
                          transition: "opacity 0.15s ease",
                          letterSpacing: "-0.1px",
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.6")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}

                {/* Resources dropdown */}
                {isResources && resourcesOpen && (
                  <div
                    onMouseEnter={openResources}
                    onMouseLeave={scheduleCloseResources}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "auto",
                      minWidth: "180px",
                      whiteSpace: "nowrap",
                      background: "#fff",
                      borderRadius: "16px",
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "6px",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      zIndex: 100,
                    }}
                  >
                    {[
                      { label: "Blog",                href: "/blog"               },
                      { label: "Case studies",        href: "/case-studies"       },
                      { label: "FAQ",                 href: "/faq"                },
                      { label: "Help center",         href: "/help-center"        },
                      { label: "What is an AI Helper",href: "/what-is-an-ai-helper"},
                      { label: "Book a Demo",         href: "/book-a-demo"        },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        style={{
                          display: "block",
                          padding: "12px 24px",
                          borderRadius: "10px",
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "#111",
                          textDecoration: "none",
                          transition: "opacity 0.15s ease",
                          letterSpacing: "-0.1px",
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.6")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}

                {/* Products mega-menu */}
                {isProducts && productsOpen && (
                  <div
                    onMouseEnter={openProducts}
                    onMouseLeave={scheduleClose}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "220%",
                      transform: "translateX(-50%)",
                      width: "520px",
                      background: "rgba(15, 15, 20, 0.65)",
                      backdropFilter: "blur(40px) saturate(140%)",
                      WebkitBackdropFilter: "blur(40px) saturate(140%)",
                      borderRadius: "1rem",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "6px 4px 6px 4px",
                      boxShadow: "0 4px 30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.10)",
                      zIndex: 100,
                    }}
                  >
                    {/* Header */}
                    <a
                      href="/ai-team"
                      style={{
                        display: "block",
                        textAlign: "center",
                        marginBottom: "22px",
                        padding: "10px 12px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "background 0.15s ease",
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                    >
                      <div style={{ fontSize: "20px", fontWeight: 700, color: "#fff", letterSpacing: "-0.3px", lineHeight: 1.2 }}>
                        Full Team
                      </div>
                      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginTop: "3px" }}>
                        Sintra X
                      </div>
                    </a>

                    {/* 2-column agent grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        columnGap: "8px",
                        rowGap: "4px",
                      }}
                    >
                      {agents.map((agent) => (
                        <a
                          key={agent.name}
                          href="#"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            padding: "8px 10px",
                            borderRadius: "12px",
                            textDecoration: "none",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)")}
                          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                        >
                          {/* Avatar */}
                          <img
                            src={agent.img}
                            alt={agent.name}
                            width={48}
                            height={48}
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "50%",
                              flexShrink: 0,
                              objectFit: "cover",
                            }}
                          />

                          {/* Text */}
                          <div>
                            <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", lineHeight: 1.3, letterSpacing: "-0.1px" }}>
                              {agent.role}
                            </div>
                            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", marginTop: "1px", letterSpacing: "-0.05px" }}>
                              {agent.name}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
          <a
            href="#"
            style={{
              fontSize: "17px",
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
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily: '"GT Walsheim Pro", Arial, sans-serif',
              whiteSpace: "nowrap",
              columnGap: "8px",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2563eb")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#3b82f6")}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* ── Mobile top bar (< lg) ────────────────────────────────────── */}
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
              {link.dropdown && (
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "15px", height: "15px", color: "#fff", transform: "rotate(180deg)" }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.5303 13.0303C15.2374 13.3232 14.7626 13.3232 14.4697 13.0303L11.7324 10.2931C11.3276 9.8883 11.0555 9.61703 10.8292 9.42491C10.6096 9.23847 10.4829 9.17101 10.3863 9.13961C10.1352 9.05803 9.86478 9.05803 9.61373 9.13961C9.51706 9.17101 9.39038 9.23847 9.17076 9.42491C8.94445 9.61704 8.67236 9.8883 8.26759 10.2931L5.53033 13.0303C5.23744 13.3232 4.76256 13.3232 4.46967 13.0303C4.17678 12.7374 4.17678 12.2626 4.46967 11.9697L7.20693 9.23241L7.22846 9.21088C7.60615 8.83317 7.9214 8.51791 8.2 8.2814C8.49056 8.03473 8.79021 7.82999 9.1502 7.71302C9.70252 7.53356 10.2975 7.53356 10.8498 7.71302C11.2098 7.82999 11.5094 8.03473 11.8 8.2814C12.0786 8.51791 12.3939 8.83318 12.7715 9.21089L12.7931 9.23241L15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303Z" fill="white" />
                </svg>
              )}
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
