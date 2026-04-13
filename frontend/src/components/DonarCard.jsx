function DonorCard({ donor, index }) {
  return (
    <div
      className="glass-card animate-fade-in-up"
      style={{
        padding: "24px",
        opacity: 0,
        animationDelay: `${(index || 0) * 0.1}s`,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "18px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Avatar */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(220,38,38,0.2), rgba(244,63,94,0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
              border: "1px solid rgba(220,38,38,0.2)",
            }}
          >
            {donor.gender === "Female" ? "👩" : "👨"}
          </div>
          <div>
            <h4
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "white",
                marginBottom: "2px",
              }}
            >
              {donor.fullName}
            </h4>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#7a7a96",
              }}
            >
              {donor.age} yrs • {donor.gender}
            </span>
          </div>
        </div>

        <span className="blood-badge">{donor.bloodGroup}</span>
      </div>

      {/* Details */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <InfoItem icon="📍" label="City" value={donor.city} />
        <InfoItem icon="📌" label="Area" value={donor.area} />
        <InfoItem icon="📱" label="Phone" value={donor.phone} />
        <InfoItem icon="✉️" label="Email" value={donor.email || "N/A"} />
      </div>

      {/* Status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "14px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: donor.available ? "#10b981" : "#ef4444",
              boxShadow: donor.available
                ? "0 0 8px rgba(16, 185, 129, 0.5)"
                : "0 0 8px rgba(239, 68, 68, 0.5)",
            }}
          />
          <span
            className={
              donor.available ? "status-available" : "status-unavailable"
            }
            style={{ fontSize: "0.85rem" }}
          >
            {donor.available ? "Available" : "Unavailable"}
          </span>
        </div>

        <a
          href={`tel:${donor.phone}`}
          className="btn-premium"
          style={{
            padding: "8px 18px",
            fontSize: "0.8rem",
            borderRadius: "10px",
          }}
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          Contact
        </a>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span style={{ fontSize: "0.9rem" }}>{icon}</span>
      <div>
        <span
          style={{
            display: "block",
            fontSize: "0.7rem",
            color: "#52526a",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: "0.88rem",
            color: "#a8a8c0",
            fontWeight: 500,
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

export default DonorCard;