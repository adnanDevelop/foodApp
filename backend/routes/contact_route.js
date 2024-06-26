import { Router } from "express";
import { contactForm } from "../controllers/contact_controller.js";

// Validation middlewares
import validation from "../middlewares/validation.js";
import contactValidation from "../validators/contact_validator.js";

const router = Router();

router.route("/contact").post(validation(contactValidation), contactForm);

export default router;
