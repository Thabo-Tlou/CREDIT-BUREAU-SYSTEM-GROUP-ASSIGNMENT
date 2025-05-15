import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const applicationSchema = new mongoose.Schema({
  loanTitle: String,
  name: String,
  idNumber: String,
  contact: String,
  createdAt: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);

router.post("/", async (req, res) => {
  try {
    const app = new Application(req.body);
    await app.save();
    res.status(201).json({ message: "Application saved" });
  } catch (err) {
    console.error("Error saving application:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
