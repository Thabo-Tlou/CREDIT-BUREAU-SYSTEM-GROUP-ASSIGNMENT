import express from 'express'; 
import LoanRecord from '../models/LoanRecord.js'; 

const router = express.Router();

// POST: Save loans and bills
router.post('/', async (req, res) => {
  try {
    const { loans, bills } = req.body;
    const newLoanRecord = new LoanRecord({ loans, bills });
    await newLoanRecord.save();
    res.status(201).json({ message: 'Loan and Bill data saved successfully.' });
  } catch (error) {
    console.error('Error saving loan and bill data:', error);
    res.status(500).json({ error: 'An error occurred while saving the data.' });
  }
});


router.get('/', async (req, res) => {
  try {
    const records = await LoanRecord.find(); // or .find({}, 'loans') if you want only loans
    res.json(records);
  } catch (error) {
    console.error('Error fetching loan records:', error);
    res.status(500).json({ error: 'An error occurred while fetching loan records.' });
  }
});

export default router;
