import mongoose from "mongoose";

const LoanRecordSchema = new mongoose.Schema({
  loans: [
    {
      loanId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      lender: {
        type: String,
        required: true,
        trim: true,
      },
      amount: {
        type: Number,
        required: true,
        min: 1,
      },
      type: {
        type: String,
        enum: ["Personal", "Business", "School"],
        required: true,
      },
      interestRate: {
        type: Number,
        required: true,
        min: 0,
      },
      status: {
        type: String,
        enum: ["Active", "Closed"],
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      dueDate: {
        type: Date,
        required: true,
      },
    },
  ],
  bills: [
    {
      billType: {
        type: String,
        enum: ["Phone", "Credit Card"],
        required: true,
      },
      amount: {
        type: Number,
        required: true,
        min: 1,
      },
      dueDate: {
        type: Date,
        required: true,
      },
      paymentDate: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        enum: ["Paid", "Pending"],
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("LoanRecord", LoanRecordSchema);
