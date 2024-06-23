import jwt from "jsonwebtoken";
import User from "../model/auth_model.js";

const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized HTTP, Token not provided",
    });
  }

  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const verifyUser = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const loggedInUser = await User.findById(verifyUser._id); // Get loggedin user data

    res.status(200).json({
      user: loggedInUser,
    });
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized. Inavlid token" });
  }
};

export default verifyToken;
