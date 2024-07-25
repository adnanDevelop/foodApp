import { Router } from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  register,
  login,
  getUserById,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/auth_controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/register", upload.single("image"), register);
router.post("/login", login);
router.get("/get-user", verifyToken, getUser);
router.put("/update-user", updateUser);
router.get("/user", getUserById);
router.delete("/delete-user", deleteUser);

export default router;
