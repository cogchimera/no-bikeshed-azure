import { z } from 'zod';

export const userProfileSchema = z.object({
  full_name: z.string().min(2).max(100),
  bio: z.string().max(500).optional(),
  avatar_url: z.string().url().optional(),
});

export const userEmailSchema = z.object({
  email: z.string().email(),
});

export const userPasswordSchema = z.object({
  password: z.string().min(8).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/),
});

export type UserProfile = z.infer<typeof userProfileSchema>;