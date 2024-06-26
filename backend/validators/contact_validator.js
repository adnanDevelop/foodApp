import { z } from "zod";

const contactValidation = z.object({
  first_name: z.string({
    required_error: "First name is required",
  }),
  last_name: z.string({
    required_error: "Last name is required",
  }),
  number: z
    .string({
      required_error: "Number is required",
    })
    .min(11, "Number must be at least 11 characters long"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please add a valid email address"),
  message: z.string({
    required_error: "Message is required",
  }),
});

export default contactValidation;
