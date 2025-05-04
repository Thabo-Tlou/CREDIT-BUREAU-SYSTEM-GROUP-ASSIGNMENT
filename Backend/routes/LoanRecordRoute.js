//route for credit form
import express from 'express'; 
import LoanRecord from '../models/LoanRecord.js'; 

const router = express.Router();

// POST route to save the submitted loan and bill data
router.post('/', async (req, res) => {
  try {
    const { loans, bills } = req.body;

    // Create a new LoanRecord document
    const newLoanRecord = new LoanRecord({
      loans,
      bills,
    });

    // Save to database
    await newLoanRecord.save();

    res.status(201).json({ message: 'Loan and Bill data saved successfully.' });
  } catch (error) {
    console.error('Error saving loan and bill data:', error);
    res.status(500).json({ error: 'An error occurred while saving the data.' });
  }
});

export default router;
