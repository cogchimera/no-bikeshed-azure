import { z } from 'zod';

export const feedbackTypeSchema = z.enum(['bug', 'feature', 'question', 'other']);

export const createFeedbackSchema = z.object({
  type: feedbackTypeSchema,
  title: z.string().min(5).max(200),
  description: z.string().min(20).max(2000),
});

export type CreateFeedback = z.infer<typeof createFeedbackSchema>;