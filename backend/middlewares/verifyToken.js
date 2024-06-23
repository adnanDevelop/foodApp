import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized HTTP, Token not provided",
    });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  console.log(jwtToken);

  try {
    const verifyUser = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      data: verifyUser,
    });
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized. Inavlid token" });
  }
};

export default verifyToken;
