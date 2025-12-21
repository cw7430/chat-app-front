import { z } from 'zod';

export const messageSchema = z.object({
  userId: z.string(),
  message: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message is too long'),
});

export type SendMessageRequestDto = z.infer<typeof messageSchema>;
