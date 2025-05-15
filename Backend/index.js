import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"; // This will already include your signup and signin routes
import loanRoutes from "./routes/loanRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import LoanRecordRoute from "./routes/LoanRecordRoute.js";
import loans from "./routes/loans.js";
import dotenv from "dotenv";
import applicationRoutes from "./routes/applications.js";


dotenv.config(); // load the variables from the .env file

const app = express();

// ✅ Update CORS configuration to allow your frontend's port (5173)
app.use(
  cors({
    origin: "http://localhost:5173", // change this to match your frontend URL
    credentials: true,
  })
);

app.use(express.json());

// ✅ Connect to MongoDB
const uri =
  "mongodb+srv://thabopiustlou:tlouthabo@bureau.jkkebcq.mongodb.net/?retryWrites=true&w=majority&appName=BUREAU";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// ✅ Use routes
app.use("/api/users", userRoutes); // This will include both the signup and signin routes
app.use("/api/loans", loanRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/loan-records", LoanRecordRoute);
app.use("/api/loans-apply", loans);  //api for credit form
app.use("/api/apply", applicationRoutes);

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
