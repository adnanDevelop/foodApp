import { Router } from "express";
import { contactForm } from "../controllers/contact_controller.js";

const router = Router();

router.route("/contact").post(contactForm);

export default router;
