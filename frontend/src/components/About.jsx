function About() {
  const features = [
    {
      icon: "🩸",
      title: "Register Easily",
      description:
        "Sign up as a blood donor in minutes with our simple registration form.",
    },
    {
      icon: "🔍",
      title: "Find Donors Fast",
      description:
        "Search by blood group, city, or area to find available donors near you instantly.",
    },
    {
      icon: "📱",
      title: "Contact Directly",
      description:
        "Reach out to donors directly via phone or email for faster coordination.",
    },
    {
      icon: "🌍",
      title: "Community Driven",
      description:
        "Join a growing network of donors and help save lives across your city.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        className="orb orb-red"
        style={{
          width: "350px",
          height: "350px",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.06,
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
        {/* Section Header */}
        <div
          style={{ textAlign: "center", marginBottom: "56px" }}
          className="animate-fade-in-up"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              background: "rgba(220, 38, 38, 0.1)",
              border: "1px solid rgba(220, 38, 38, 0.2)",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#f87171",
              marginBottom: "16px",
            }}
          >
            ✦ HOW IT WORKS
          </div>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>
            Why BloodDonor Connect?
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We make it simple to connect blood donors with those in need —
            quickly and reliably.
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="glass-card animate-fade-in-up"
              style={{
                padding: "32px 28px",
                textAlign: "center",
                opacity: 0,
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(244,63,94,0.08))",
                  border: "1px solid rgba(220,38,38,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  margin: "0 auto 20px",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#7a7a96",
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginTop: "60px" }} />

        {/* Blood Compatibility Info */}
        <div
          style={{ textAlign: "center", marginTop: "40px" }}
          className="animate-fade-in-up"
        >
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "white",
              marginBottom: "24px",
            }}
          >
            Blood Type Compatibility
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
              (group) => (
                <div
                  key={group}
                  style={{
                    padding: "16px 24px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "14px",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(220, 38, 38, 0.3)";
                    e.currentTarget.style.background =
                      "rgba(220, 38, 38, 0.08)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.03)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      background:
                        "linear-gradient(135deg, #f87171, #f43f5e)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {group}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
