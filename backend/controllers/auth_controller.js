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

    console.log("Request body:", req.body);

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

    // if password is less than 8
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    // Creating user
    const user = await User.create(
      { name, email, password, image: imageUrl },
      { password: 0 }
    );
    console.log(user);
    return res.status(200).json({
      message: "User registered successfully",
      user,
      token: await user.generateAuthToken(),
    });
  } catch (error) {
    console.error("Error while registering user", error);
    return res
      .status(400)
      .json({ message: "Error while registering user", error: error?.message });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // If user email or password is missing
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //  If email is invalid
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res
        .status(400)
        .json({ message: "Please add a valid email address" });
    }

    // If password is too short
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    // If user doesn't exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // if email is incorrect
    if (email !== user.email) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // If password is incorrect
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      // If user logged in successfully
      return res.status(200).json({
        message: "logged in successfully",
        userId: user._id.toString(),
        token: await user.generateAuthToken(),
        status_code: 200,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Error while login user" });
  }
};

// Update user profile
const updateUser = async (req, res) => {
  try {
    const { name, email, currentPassword, newPassword } = req.body;
    const { id } = req.query;

    // if password is less than 8
    if (newPassword.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    const isUserExist = await User.findOne({ _id: id });

    // Matching current password
    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      isUserExist.password
    );

    // If Current doesn't match with
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Current password doesn't match",
        status_code: 400,
      });
    }

    // Hashing new  password
    const hashNewPassword = await bcrypt.hash(newPassword, 10);

    // Update user in database
    await User.updateOne(
      { _id: id },
      { $set: { name, email, password: hashNewPassword } }
    );

    // Sending success response to the client
    return res.status(200).json({
      message: "User updated successfully",
      status_code: 200,
    });
  } catch (error) {
    console.log("Error while updating user:", error);
    return res.status(400).json({
      message: "Error while updating user",
      error: error.message,
    });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.query;

    // Check if user exist before deletion
    const isUserExist = await User.findOne({ _id: id });
    if (!isUserExist) {
      return res.status(400).json({
        message: "User doesn't exist",
        status_code: 400,
      });
    }

    // // Delete user from database
    const deleteUser = await User.deleteOne({ _id: id });

    // // Check if deleteUser operation was successful
    if (deleteUser.deletedCount !== 1) {
      throw new Error("User deletion failed");
    }

    return res.status(200).json({
      message: "User deleted successfully",
      status_code: 200,
    });
  } catch (error) {
    console.log("Error while deleting user:", error);
    res.status(400).json({
      message: "Error while deleting user",
      status_code: 400,
    });
  }
};

// Get user data by id
const getUserById = async (req, res) => {
  try {
    const { id } = req.query;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Data retrieved successfully",
      data: user,
      status_code: 200,
    });
  } catch (error) {
    console.log("Error while getting user data by id", error);
    return res.status(400).json({
      message: "Error while getting data",
    });
  }
};

// Get Loged in user data
const getUser = async (req, res) => {
  return res.status(200).json({
    message: "Data retrieved successfully",
    data: req.user,
    token: req.token,
    status_code: 200,
  });
};

export { register, login, updateUser, deleteUser, getUserById, getUser };
