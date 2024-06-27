import { Router } from "express";
import contactForm from "../controllers/contact_controller.js";
import formValidation from "../middlewares/formValidation.js";
import contactValidator from "../validators/contact_validator.js";

const router = Router();

router.post("/contact-data", formValidation(contactValidator), contactForm);

export default router;
