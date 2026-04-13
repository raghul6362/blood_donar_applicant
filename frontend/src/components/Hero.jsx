function Hero() {
  const stats = [
    { value: "10K+", label: "Donors Registered" },
    { value: "5K+", label: "Lives Saved" },
    { value: "100+", label: "Cities Covered" },
  ];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background Orbs */}
      <div
        className="orb orb-red"
        style={{
          width: "500px",
          height: "500px",
          top: "-100px",
          right: "-100px",
          opacity: 0.12,
        }}
      />
      <div
        className="orb orb-pink"
        style={{
          width: "400px",
          height: "400px",
          bottom: "50px",
          left: "-150px",
          opacity: 0.08,
        }}
      />
      <div
        className="orb orb-amber"
        style={{
          width: "250px",
          height: "250px",
          top: "40%",
          right: "20%",
          opacity: 0.06,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <div>
            <div
              className="animate-fade-in-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                background: "rgba(220, 38, 38, 0.12)",
                border: "1px solid rgba(220, 38, 38, 0.2)",
                borderRadius: "999px",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#f87171",
                marginBottom: "24px",
              }}
            >
              <span className="animate-heartbeat" style={{ fontSize: "1rem" }}>
                ❤️
              </span>
              Every Drop Counts
            </div>

            <h1
              className="animate-fade-in-up stagger-1"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "20px",
                opacity: 0,
              }}
            >
              Save Lives{" "}
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #dc2626, #f43f5e, #ec4899)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradient-shift 4s ease infinite",
                }}
              >
                Donate Blood
              </span>
            </h1>

            <p
              className="animate-fade-in-up stagger-2"
              style={{
                fontSize: "1.15rem",
                color: "#a8a8c0",
                lineHeight: 1.8,
                maxWidth: "480px",
                marginBottom: "36px",
                opacity: 0,
              }}
            >
              Join our community of life-savers. Register as a blood donor and
              help people in your area find the blood they need — when they need
              it most.
            </p>

            <div
              className="animate-fade-in-up stagger-3"
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "50px",
                opacity: 0,
              }}
            >
              <a href="#register" className="btn-premium">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Register Now
              </a>
              <a
                href="#search"
                className="btn-premium btn-outline"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                Find a Donor
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-fade-in-up stagger-4"
              style={{
                display: "flex",
                gap: "40px",
                opacity: 0,
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#7a7a96",
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="animate-fade-in-up stagger-2 hero-visual"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "380px",
                height: "380px",
              }}
            >
              {/* Main Circle */}
              <div
                className="animate-float"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(244, 63, 94, 0.1))",
                  border: "1px solid rgba(220, 38, 38, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "40px auto",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "6rem",
                    filter: "drop-shadow(0 0 30px rgba(220, 38, 38, 0.4))",
                  }}
                  className="animate-heartbeat"
                >
                  🩸
                </div>

                {/* Floating Blood Group Cards */}
                {["A+", "B+", "O+", "AB-"].map((group, i) => {
                  const positions = [
                    { top: "-20px", left: "-30px" },
                    { top: "-20px", right: "-30px" },
                    { bottom: "-20px", left: "-10px" },
                    { bottom: "-20px", right: "-10px" },
                  ];
                  const delays = [0, 1, 2, 1.5];
                  return (
                    <div
                      key={group}
                      style={{
                        position: "absolute",
                        ...positions[i],
                        padding: "10px 18px",
                        background: "rgba(10, 10, 15, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(220, 38, 38, 0.25)",
                        borderRadius: "14px",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        color: "#f87171",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                        animation: `float 4s ease-in-out ${delays[i]}s infinite`,
                      }}
                    >
                      {group}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 30px !important;
          }
          .hero-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;