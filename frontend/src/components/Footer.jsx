function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 0 30px",
        overflow: "hidden",
      }}
    >
      <div
        className="orb orb-red"
        style={{
          width: "300px",
          height: "300px",
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.04,
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #dc2626, #f43f5e)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                🩸
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "white",
                }}
              >
                Blood<span style={{ color: "#f87171" }}>Donor</span>
              </span>
            </div>
            <p
              style={{
                color: "#52526a",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                maxWidth: "320px",
              }}
            >
              Connecting blood donors with those in need. Every donation makes a
              difference. Join our community and help save lives today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#7a7a96",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h4>
            {[
              { label: "Home", href: "#home" },
              { label: "Register", href: "#register" },
              { label: "Find Donor", href: "#search" },
              { label: "About", href: "#about" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  padding: "6px 0",
                  color: "#52526a",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#f87171")}
                onMouseLeave={(e) => (e.target.style.color = "#52526a")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#7a7a96",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "16px",
              }}
            >
              Support
            </h4>
            <p
              style={{
                color: "#52526a",
                fontSize: "0.9rem",
                lineHeight: 1.8,
              }}
            >
              Need help finding a donor urgently?
            </p>
            <p
              style={{
                color: "#f87171",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginTop: "8px",
              }}
            >
              📞 1800-XXX-XXXX
            </p>
            <p
              style={{
                color: "#52526a",
                fontSize: "0.85rem",
                marginTop: "4px",
              }}
            >
              Available 24/7
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              color: "#3a3a4a",
              fontSize: "0.82rem",
            }}
          >
            © {new Date().getFullYear()} BloodDonor Connect. All rights
            reserved.
          </p>
          <p
            style={{
              color: "#3a3a4a",
              fontSize: "0.82rem",
            }}
          >
            Built with ❤️ to save lives
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
