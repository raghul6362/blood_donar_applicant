import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import donorRoutes from "./routes/donorRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blood Donor API is running...");
});

app.use("/api/donors", donorRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Connection Error:", err.message);
  });