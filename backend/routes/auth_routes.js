import { Router } from "express";
import multer from "multer";
import { register, login } from "../controllers/auth_controller.js";
const router = Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/register", upload.single("image"), register);
router.post("/register", register);
router.post("/login", login);

export default router;
