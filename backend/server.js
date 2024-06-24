import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
import dbConnect from "./db/db.js";
import authRoutes from "./routes/auth_routes.js";
// import errorMessage from "./middlewares/errorMiddleware.js";

app.use(express.json());
app.use(cors());
app.use("/auth/api", authRoutes);
// app.use(errorMessage);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  dbConnect();
  console.log(`Server running on port ${PORT}`);
});
