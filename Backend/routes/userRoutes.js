import express from "express";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import User from "../models/User.js";

const router = express.Router();

// Configure multer storage for avatar images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder where avatars will be stored
  },
  filename: (req, file, cb) => {
    // Set the file name to include timestamp for uniqueness
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Signup route
router.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;

  // Ensure username, email, and password are provided
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email, and password are required" });
  }

  try {
    // Check for existing user by email
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Check if username already exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({ message: "Username already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const user = new User({
      email,
      password: hashedPassword,
      username,
    });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup Error:", err);

    // Mongoose validation error
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ message: errors.join(", ") });
    }

    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Signin route (for login)
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Save basic profile to localStorage via frontend
    const profile = {
      name: user.username || "User",
      avatar: user.avatar || "/images/avatar.jpg", // Default avatar if none set
    };

    res.status(200).json({
      message: "Login successful",
      profile,
    });
  } catch (err) {
    console.error("Signin Error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Upload avatar route
router.post("/upload-avatar", upload.single("avatar"), async (req, res) => {
  try {
    const { userId } = req.body;
    const avatarPath = req.file.path; // Path to the uploaded avatar file

    // Find the user and update the avatar URL
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.avatar = avatarPath; // Store the avatar path in the user model
    await user.save();

    res
      .status(200)
      .json({ message: "Avatar uploaded successfully", avatarUrl: avatarPath });
  } catch (err) {
    console.error("Avatar Upload Error:", err);
    res.status(500).json({ message: "Failed to upload avatar" });
  }
});

export default router;
