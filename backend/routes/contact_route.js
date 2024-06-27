import { Router } from "express";
import contactForm from "../controllers/contact_controller.js";

const router = Router();

router.post("/contact-data", contactForm);

export default router;
