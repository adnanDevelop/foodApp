import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import User from "../model/auth_model.js";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: "dkscqk1ot",
  api_key: "417151182885992",
  api_secret: "Yfap5gZtvMuFD2mLJ-PLGjQUEzs",
});

// Register Controller
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const image = req.file.path;

    if (!image) {
      return res.status(400).json({ message: "Please select image" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(image);
    const imageUrl = result.secure_url;

    // If user exist already
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // if name and email and password are empty
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // if email is not valid
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res
        .status(400)
        .json({ message: "Please add a valid email address" });
    }

    // if password is less than 8
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    // Creating user
    const user = await User.create({ name, email, password, image: imageUrl });
    return res.status(200).json({
      message: "User registered successfully",
      user,
      token: await user.generateAuthToken(),
    });
  } catch (error) {
    console.error("Error while registering user", error);
    return res.status(400).json({ message: "Error while registering user" });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // If user email or password is missing
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
    }

    //  If email is invalid
    if (!/\S+@\S+\.\S+/.test(email)) {
      res.status(400).json({ message: "Please add a valid email address" });
    }

    // If password is too short
    if (password.length < 8) {
      res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    // If user doesn't exist
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
    }

    // if email is incorrect
    if (email !== user.email) {
      res.status(400).json({ message: "Invalid email address" });
    }

    // If password is incorrect
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.status(400).json({ message: "Invalid password" });
    } else {
      // If user logged in successfully
      return res.status(200).json({
        message: "logged in successfully",
        userId: user._id.toString(),
        token: await user.generateAuthToken(),
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Error while login user" });
  }
};

// Get User Data
const getUserData = async (req, res) => {
  try {
    const user = await User.find({});

    return res.status(200).json({
      message: "Data retrieved successfully",
      user,
    });
  } catch (error) {
    console.log("Error while getting data", error);
    return res.status(400).json({
      message: "Error while getting data",
    });
  }
};

// Get Loged in user data
const getUser = async (req, res) => {};

export { register, login, getUserData, getUser };
