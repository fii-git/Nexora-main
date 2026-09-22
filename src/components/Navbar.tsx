import React, { useState, useEffect } from "react";
import { navItems } from "../data";
import { Menu, X, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/LOGO3.png";

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "services",
        "why-us",
        "pricing",
        "projects",
        "testimonials",
        "blog",
        "contact",
      ];

      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "px-4 sm:px-6 lg:px-8 pt-3"
          : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          isScrolled
            ? "max-w-7xl rounded-2xl border border-white/15 bg-[#10204A]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,35,80,0.22)]"
            : "max-w-7xl"
        }`}
      >
        <div
          className={`px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
          <div className="flex items-center justify-between">

            {/* ================= LOGO ================= */}
            <a
              id="brand-logo"
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group cursor-pointer shrink-0"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <img
                  src={logo}
                  alt="NEXORA"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <span
                className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
                  isScrolled
                    ? "text-white"
                    : "text-neutral-900"
                }`}
              >
                NEXORA
              </span>
            </a>

            {/* ================= DESKTOP NAVIGATION ================= */}
            <nav
              id="desktop-nav"
              className="hidden lg:flex items-center gap-7 xl:gap-8"
            >
              {navItems.map((item) => {
                const targetId = item.href.replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.label}
                    id={`nav-link-${targetId}`}
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.href)
                    }
                    className={`relative text-[13px] font-bold tracking-wider transition-colors duration-300 group ${
                      isActive
                        ? isScrolled
                          ? "text-[#5EA7FF]"
                          : "text-[#2587FF]"
                        : isScrolled
                        ? "text-white/75 hover:text-white"
                        : "text-neutral-700 hover:text-[#2587FF]"
                    }`}
                  >
                    {item.label}

                    {/* Active underline */}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#2587FF] to-[#8B3DFF] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* ================= SOCIAL + CTA ================= */}
            <div className="hidden md:flex items-center gap-4">

              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a
                  id="social-instagram-nav"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isScrolled
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-neutral-600 hover:text-[#2587FF] hover:bg-[#2587FF]/10"
                  }`}
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  id="social-linkedin-nav"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isScrolled
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-neutral-600 hover:text-[#2587FF] hover:bg-[#2587FF]/10"
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Twitter */}
                <a
                  id="social-twitter-nav"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isScrolled
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-neutral-600 hover:text-[#2587FF] hover:bg-[#2587FF]/10"
                  }`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>

              {/* Let's Talk */}
              {onOpenContact && (
                <button
                  id="nav-contact-btn"
                  onClick={onOpenContact}
                  className="ml-1 relative overflow-hidden group px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#2587FF] to-[#8B3DFF] shadow-lg shadow-[#2587FF]/20 hover:shadow-[#8B3DFF]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  <span className="relative z-10">
                    Let's Talk
                  </span>

                  <span className="absolute inset-0 bg-gradient-to-r from-[#8B3DFF] to-[#2587FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              )}
            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "text-white hover:bg-white/10"
                    : "text-neutral-800 hover:bg-neutral-100"
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileMenuOpen && (
            <div
              id="mobile-menu-drawer"
              className="lg:hidden mt-4 rounded-2xl border border-white/10 bg-[#18366B]/75 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="p-5 space-y-1">

                {navItems.map((item) => {
                  const targetId = item.href.replace("#", "");
                  const isActive =
                    activeSection === targetId;

                  return (
                    <a
                      key={item.label}
                      id={`mobile-nav-link-${targetId}`}
                      href={item.href}
                      onClick={(e) =>
                        handleNavClick(e, item.href)
                      }
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-white bg-gradient-to-r from-[#2587FF]/20 to-[#8B3DFF]/20 border border-[#2587FF]/20"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}

                {/* Mobile bottom section */}
                <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>

                  {onOpenContact && (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenContact();
                      }}
                      className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#2587FF] to-[#8B3DFF] shadow-lg shadow-[#2587FF]/20"
                    >
                      Let's Talk
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};