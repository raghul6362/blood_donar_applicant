import { useState } from "react";
import axios from "axios";

function RegisterDonor() {
  const initialForm = {
    fullName: "",
    age: "",
    gender: "Male",
    bloodGroup: "A+",
    phone: "",
    email: "",
    city: "",
    area: "",
    address: "",
    available: true,
  };

  const [formData, setFormData] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/donors/register",
        formData
      );
      setMessage(res.data.message);
      setMessageType("success");
      setFormData(initialForm);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <section id="register" style={{ position: "relative", padding: "80px 0" }}>
      {/* Background Orb */}
      <div
        className="orb orb-red"
        style={{
          width: "400px",
          height: "400px",
          top: "10%",
          left: "-10%",
          opacity: 0.08,
        }}
      />

      <div
        style={{
          maxWidth: "720px",
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
            ✦ REGISTRATION
          </div>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>
            Register as a Donor
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Fill out the form below to join our life-saving community of blood
            donors.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="glass-card animate-fade-in-up stagger-1"
          style={{ padding: "40px", opacity: 0 }}
        >
          {message && (
            <div
              className={
                messageType === "success" ? "toast-success" : "toast-error"
              }
              style={{ marginBottom: "24px" }}
            >
              {messageType === "success" ? "✓ " : "✕ "}
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name & Age */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
              className="form-row"
            >
              <div>
                <label className="label-premium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-premium"
                  required
                  id="register-fullName"
                />
              </div>
              <div>
                <label className="label-premium">Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="25"
                  min="18"
                  max="65"
                  value={formData.age}
                  onChange={handleChange}
                  className="input-premium"
                  required
                  id="register-age"
                />
              </div>
            </div>

            {/* Gender & Blood Group */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
              className="form-row"
            >
              <div>
                <label className="label-premium">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="input-premium"
                  id="register-gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="label-premium">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="input-premium"
                  id="register-bloodGroup"
                >
                  {bloodGroups.map((bg) => (
                    <option key={bg} value={bg}>
                      {bg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Phone & Email */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
              className="form-row"
            >
              <div>
                <label className="label-premium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-premium"
                  required
                  id="register-phone"
                />
              </div>
              <div>
                <label className="label-premium">Email (Optional)</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-premium"
                  id="register-email"
                />
              </div>
            </div>

            {/* City & Area */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
              className="form-row"
            >
              <div>
                <label className="label-premium">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Chennai"
                  value={formData.city}
                  onChange={handleChange}
                  className="input-premium"
                  required
                  id="register-city"
                />
              </div>
              <div>
                <label className="label-premium">Area / Location</label>
                <input
                  type="text"
                  name="area"
                  placeholder="T. Nagar"
                  value={formData.area}
                  onChange={handleChange}
                  className="input-premium"
                  required
                  id="register-area"
                />
              </div>
            </div>

            {/* Address */}
            <div style={{ marginBottom: "20px" }}>
              <label className="label-premium">Address (Optional)</label>
              <textarea
                name="address"
                placeholder="Enter your full address..."
                value={formData.address}
                onChange={handleChange}
                className="input-premium"
                id="register-address"
              />
            </div>

            {/* Available */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "28px",
                padding: "14px 18px",
                background: "rgba(16, 185, 129, 0.06)",
                border: "1px solid rgba(16, 185, 129, 0.15)",
                borderRadius: "12px",
              }}
            >
              <input
                type="checkbox"
                name="available"
                checked={formData.available}
                onChange={handleChange}
                className="checkbox-premium"
                id="register-available"
              />
              <label
                htmlFor="register-available"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#10b981",
                  cursor: "pointer",
                }}
              >
                I am currently available for blood donation
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-premium"
              disabled={loading}
              id="register-submit"
              style={{ width: "100%", padding: "16px" }}
            >
              {loading ? (
                <>
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "white",
                      borderRadius: "50%",
                      animation: "spin 0.6s linear infinite",
                      display: "inline-block",
                    }}
                  />
                  Registering...
                </>
              ) : (
                <>
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
                  Register as Donor
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default RegisterDonor;