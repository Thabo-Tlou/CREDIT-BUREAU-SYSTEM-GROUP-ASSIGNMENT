// controllers/userController.js

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "../utils/email.js"; // Import the email function

// Handle user signup and send verification email
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate user input
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    // Check if the user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      isVerified: false, // Not verified initially
    });

    // Save the new user
    await newUser.save();

    // Generate the email verification token
    const emailToken = jwt.sign(
      { email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send verification email
    await sendVerificationEmail(newUser.email, emailToken);

    return res.status(201).json({
      message:
        "Signup successful! Please check your email to verify your account.",
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res
      .status(500)
      .json({ message: "Signup failed, please try again." });
  }
};
