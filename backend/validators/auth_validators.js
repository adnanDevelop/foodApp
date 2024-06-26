import { z } from "zod";

const signupValidation = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please add a valid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),
  image: z.string({
    required_error: "Image is required",
  }),
});

const loginValidation = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please add a valid email address"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters long"),
});

export { signupValidation, loginValidation };
