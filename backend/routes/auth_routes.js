import { Router } from "express";
import { register } from "../controllers/auth_controller.js";
const router = Router();

router.post("/register", register);
// router.post("/login", authController.login);

export default router;
