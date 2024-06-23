import { Router } from "express";
import multer from "multer";
import {
  register,
  login,
  getUserData,
  getUser,
} from "../controllers/auth_controller.js";
import verifyToken from "../middlewares/VerifyToken.js";
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
router.get("/get-data", getUserData);
router.get("/user", verifyToken, getUser);

export default router;
