import express from "express";
import {
  getLoans,
  createLoan,
  updateLoan,
  deleteLoan,
} from "../controllers/loanController.js";

const router = express.Router();

router.get("/loans-apply", getLoans);
router.post("/", createLoan);
router.put("/:id", updateLoan);
router.delete("/:id", deleteLoan);

export default router;
