import mongoose from "mongoose";

const donorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 65
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"]
    },
    bloodGroup: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    area: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    available: {
      type: Boolean,
      default: true
    },
    lastDonated: {
      type: Date
    }
  },
  { timestamps: true }
);

export default mongoose.model("Donor", donorSchema);