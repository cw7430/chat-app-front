import { z } from 'zod';

export const userSchema = z.object({
  userId: z.string(),
  nickName: z.string(),
  token: z.string(),
  isOnline: z.boolean(),
});

export type UserResponseDto = z.infer<typeof userSchema>;
