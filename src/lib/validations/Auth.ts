import { User } from "@/types"
import { z } from "zod"

const passwordSchema = z
  .string()
  .min(6, {
    message: "Password must be at least 6 characters long",
  })
  .max(100, {
    message: "Password must be at most 100 characters long",
  })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*._-])(?=.{6,})/, {
    message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
  })

export const authSchema: z.Schema<Omit<User, "username">> = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: passwordSchema
})

export const registerSchema: z.Schema<User & { confirmPassword: string }> = z.object({
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(20, {
      message: "Username must be at most 20 characters long",
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username must contain only letters and numbers",
    }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: passwordSchema,
  confirmPassword: z
    .string()
    .min(6, {
      message: "Confirm password must be at least 6 characters long",
    })
    .max(100, {
      message: "Confirm password must be at most 100 characters long",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*._-])(?=.{6,})/, {
      message: "Confirm password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})