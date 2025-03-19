import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().email(" Please enter a valid email").trim(),
  password: z
    .string()
    .min(6, "Password needs to be at lest 6 character")
    .trim(),
});
export default loginValidationSchema;
