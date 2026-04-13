import { useState } from "react";
import axios from "axios";
import DonorCard from "./DonarCard";

function SearchDonor() {
  const [filters, setFilters] = useState({
    bloodGroup: "",
    city: "",
    area: "",
  });

  const [donors, setDonors] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSearched(true);
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await axios.get(
        `https://blood-donar-applicant.onrender.com/api/donors/search?${query}`
      );
      setDonors(res.data.donors);
      setMessage(
        res.data.donors.length === 0
          ? "No donors found matching your criteria. Try broadening your search."
          : ""
      );
    } catch (error) {
      setMessage("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setFilters({ bloodGroup: "", city: "", area: "" });
    setDonors([]);
    setMessage("");
    setSearched(false);
  };

  return (
    <section id="search" style={{ position: "relative", padding: "80px 0" }}>
      {/* Background Orb */}
      <div
        className="orb orb-pink"
        style={{
          width: "400px",
          height: "400px",
          top: "20%",
          right: "-10%",
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
          style={{ textAlign: "center", marginBottom: "48px" }}
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
            ✦ FIND DONORS
          </div>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>
            Search for a Donor
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Search by blood group, city, or area to find available donors near
            you.
          </p>
        </div>

        {/* Search Card */}
        <div
          className="glass-card animate-fade-in-up stagger-1"
          style={{ padding: "32px", marginBottom: "40px", opacity: 0 }}
        >
          <form
            onSubmit={handleSearch}
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 180px" }}>
              <label className="label-premium">Blood Group</label>
              <select
                name="bloodGroup"
                value={filters.bloodGroup}
                onChange={handleChange}
                className="input-premium"
                id="search-bloodGroup"
              >
                <option value="">All Groups</option>
                {bloodGroups.map((bg) => (
                  <option key={bg} value={bg}>
                    {bg}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ flex: "1 1 180px" }}>
              <label className="label-premium">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city..."
                value={filters.city}
                onChange={handleChange}
                className="input-premium"
                id="search-city"
              />
            </div>

            <div style={{ flex: "1 1 180px" }}>
              <label className="label-premium">Area / Location</label>
              <input
                type="text"
                name="area"
                placeholder="Enter area..."
                value={filters.area}
                onChange={handleChange}
                className="input-premium"
                id="search-area"
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flex: "1 1 auto",
              }}
            >
              <button
                type="submit"
                className="btn-premium"
                disabled={loading}
                id="search-submit"
                style={{
                  flex: 1,
                  minWidth: "140px",
                  padding: "14px 24px",
                }}
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "white",
                        borderRadius: "50%",
                        animation: "spin 0.6s linear infinite",
                        display: "inline-block",
                      }}
                    />
                    Searching...
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    Search
                  </>
                )}
              </button>
              {searched && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-premium btn-outline"
                  style={{ padding: "14px 20px" }}
                  id="search-clear"
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Results */}
        {message && (
          <div
            className="toast-error"
            style={{
              textAlign: "center",
              marginBottom: "24px",
              maxWidth: "500px",
              margin: "0 auto 24px",
            }}
          >
            {message}
          </div>
        )}

        {/* Results Count */}
        {searched && donors.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#7a7a96",
                fontWeight: 500,
              }}
            >
              Found{" "}
              <span style={{ color: "#f87171", fontWeight: 700 }}>
                {donors.length}
              </span>{" "}
              donor{donors.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {/* Donor Cards Grid */}
        {donors.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "20px",
            }}
          >
            {donors.map((donor, idx) => (
              <DonorCard key={donor._id} donor={donor} index={idx} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {searched && !loading && donors.length === 0 && !message && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#52526a",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🔍</div>
            <p style={{ fontSize: "1rem", fontWeight: 500 }}>
              No results found
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default SearchDonor;