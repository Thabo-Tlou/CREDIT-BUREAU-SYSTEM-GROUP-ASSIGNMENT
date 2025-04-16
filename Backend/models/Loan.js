import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String,
  amount: Number,
  status: { type: String, enum: ["Paid", "Unpaid"], default: "Unpaid" },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Loan", loanSchema);
