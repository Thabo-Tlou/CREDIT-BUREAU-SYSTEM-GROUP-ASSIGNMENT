import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: String, required: true },
  duration: { type: String, required: true },
  rate: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Education", "Business", "Personal"],
  },
});

// Prevent OverwriteModelError
export default mongoose.models.Loan || mongoose.model("Loan", loanSchema);
