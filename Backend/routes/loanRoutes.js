import express from "express";
import Loan from "../models/Loan.js";

const router = express.Router();

// Add a Loan
router.post("/", async (req, res) => {
  try {
    // Validate lender
    const allowedLenders = ["FNB", "Postbank", "Nedbank", "Alliance Lesotho"];
    if (!allowedLenders.includes(req.body.lender)) {
      return res.status(400).json({ message: "Invalid lender specified" });
    }

    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Loans for a User
router.get("/:userId", async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.params.userId });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;