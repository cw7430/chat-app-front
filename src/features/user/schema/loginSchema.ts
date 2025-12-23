import { z } from 'zod';

export const loginSchema = z.object({
  nickName: z
    .string()
    .min(1, 'Username must be at least 3 characters long')
    .max(20, 'Username must be at most 20 characters long'),
});

export type LoginRequestDto = z.infer<typeof loginSchema>;