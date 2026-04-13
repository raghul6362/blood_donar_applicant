import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Register", href: "#register" },
    { label: "Find Donor", href: "#search" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "18px 0",
        background: scrolled
          ? "rgba(10, 10, 15, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #dc2626, #f43f5e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
              boxShadow: "0 4px 15px rgba(220, 38, 38, 0.4)",
            }}
          >
            🩸
          </div>
          <div>
            <span
              style={{
                fontWeight: 800,
                fontSize: "1.2rem",
                letterSpacing: "-0.02em",
              }}
            >
              Blood
              <span style={{ color: "#f87171" }}>Donor</span>
            </span>
            <span
              style={{
                display: "block",
                fontSize: "0.65rem",
                color: "#a8a8c0",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: "-2px",
              }}
            >
              Connect
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: "8px 18px",
                color: "#a8a8c0",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "white";
                e.target.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#a8a8c0";
                e.target.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="btn-premium"
            style={{
              padding: "10px 24px",
              fontSize: "0.85rem",
              marginLeft: "8px",
            }}
          >
            Become a Donor
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "4px",
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            padding: "16px 24px 24px",
            background: "rgba(10, 10, 15, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            animation: "fadeInUp 0.3s ease-out",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 16px",
                color: "#e2e2ee",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                borderRadius: "10px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = "rgba(255,255,255,0.06)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background = "transparent")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="btn-premium"
            onClick={() => setMobileOpen(false)}
            style={{
              width: "100%",
              marginTop: "8px",
              textAlign: "center",
            }}
          >
            Become a Donor
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;