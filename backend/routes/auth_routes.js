import { Router } from "express";
import multer from "multer";
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
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/register", upload.single("image"), register);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.put("/update-user", updateUser);
router.delete("/delete-user", deleteUser);
router.get("/get-data", getUserById);

export default router;
