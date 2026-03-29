import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be under 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{6,14}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  helpTopic: z.string().min(1, "Please select a topic"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

export type FormFields = z.infer<typeof contactFormSchema>;
