import Loan from "../models/LoanModel.js";

// GET all or filtered
export const getLoans = async (req, res) => {
  try {
    const { search, category } = req.query;
    const query = {};

    if (category && category !== "All") query.category = category;
    if (search) query.title = { $regex: search, $options: "i" };

    const loans = await Loan.find(query);
    res.status(200).json(loans);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE
export const createLoan = async (req, res) => {
  try {
    const loan = new Loan(req.body);
    const saved = await loan.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
export const updateLoan = async (req, res) => {
  try {
    const updated = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Loan not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteLoan = async (req, res) => {
  try {
    const deleted = await Loan.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Loan not found" });
    res.json({ message: "Loan deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
