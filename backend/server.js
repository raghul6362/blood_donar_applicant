import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import donorRoutes from "./routes/donorRoutes.js";

dotenv.config();

const app = express();

// ✅ FIXED CORS
app.use(cors());
app.options("*", cors());

app.use(express.json());

// ✅ Test route
app.get("/test", (req, res) => {
  res.send("Test route working ✅");
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Blood Donor API is running...");
});

// ✅ API routes
app.use("/api/donors", donorRoutes);

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// ✅ DB + Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Connection Error:", err.message);
  });