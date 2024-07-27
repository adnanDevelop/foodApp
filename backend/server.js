import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
import dbConnect from "./db/db.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

// Routes file
import authRoutes from "./routes/auth_routes.js";
import addressRoute from "./routes/address_route.js";
import contactRoute from "./routes/contact_route.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(errorMiddleware);

// Routes
app.use("/auth/api", authRoutes);
app.use("/api/user", addressRoute);
app.use("/api", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server running on port ${PORT}`);
});
