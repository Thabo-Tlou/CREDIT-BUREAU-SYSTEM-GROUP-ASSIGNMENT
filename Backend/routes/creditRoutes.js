import express from "express";
import User from "../models/User.js";
import Loan from "../models/Loan.js";
import Payment from "../models/Payment.js";

const router = express.Router();

// Fetch User Details
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Calculate & Store Credit Score
router.post("/user/:id/credit-score", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");

    const loans = await Loan.find({ userId: user._id });
    const payments = await Payment.find({ userId: user._id });

    // Simple credit score calculation: (payments count - loan count) * 10 + 500
    const creditScore = (payments.length - loans.length) * 10 + 500;
    user.creditScore = Math.max(300, Math.min(creditScore, 850)); // Clamp between 300-850
    await user.save();

    res.send({ creditScore: user.creditScore });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Generate Credit Report
router.get("/user/:id/credit-report", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");

    const loans = await Loan.find({ userId: user._id });
    const payments = await Payment.find({ userId: user._id });

    const report = {
      user: {
        name: user.name,
        email: user.email,
        creditScore: user.creditScore,
      },
      loans,
      payments,
    };

    res.send(report);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
