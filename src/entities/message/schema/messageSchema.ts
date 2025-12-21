import { z } from 'zod';

export const messageSchema = z.object({
  chatId: z.string(),
  userId: z.string(),
  nickName: z.string(),
  message: z.string(),
});

export const messageListSchema = z.array(messageSchema);

export type MessageResponseDto = z.infer<typeof messageSchema>;
export type MessageListResponseDto = z.infer<typeof messageListSchema>;
