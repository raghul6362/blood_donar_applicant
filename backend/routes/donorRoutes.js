import express from "express";
import Donor from "../models/Donor.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const donor = new Donor(req.body);
    const savedDonor = await donor.save();
    res.status(201).json({
      success: true,
      message: "Donor registered successfully",
      donor: savedDonor
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error registering donor",
      error: error.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: donors.length,
      donors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching donors",
      error: error.message
    });
  }
});


router.get("/search", async (req, res) => {
  try {
    const { bloodGroup, city, area } = req.query;

    let filter = { available: true };

    if (bloodGroup) {
      filter.bloodGroup = bloodGroup;
    }

    if (city) {
      filter.city = new RegExp(city, "i");
    }

    if (area) {
      filter.area = new RegExp(area, "i");
    }

    const donors = await Donor.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: donors.length,
      donors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching donors",
      error: error.message
    });
  }
});

export default router;