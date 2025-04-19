// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  username: {
    type: String,
    required: true,
    unique: true, // Ensure the username is unique
    default: function () {
      return this.email.split("@")[0]; // Default to the part before '@' of the email
    },
  },
});

const User = mongoose.model("User", userSchema);
export default User;
