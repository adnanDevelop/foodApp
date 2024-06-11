import User from "../model/auth_model.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // If user exist already
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({
        message: "Please add a valid email address",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long",
      });
    }

    const user = await User.create({ name, email, password });
    return res.status(200).json({
      status: res.status,
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error while registering user", error);
    return res.status(400).json({ message: error.message });
  }
};

export { register };
