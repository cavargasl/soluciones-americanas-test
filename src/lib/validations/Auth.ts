import { User } from "@/types"
import { z } from "zod"

export const authSchema: z.Schema<Omit<User, "username">> = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(100, {
      message: "Password must be at most 100 characters long",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*._-])(?=.{6,})/, {
      message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
})