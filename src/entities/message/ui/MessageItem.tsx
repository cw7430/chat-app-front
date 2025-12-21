'use client';

import { Container } from '@mui/material';

import SystemMessage from './SystemMessage';
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import type { MessageResponseDto } from '@/entities/message/schema/MessageSchema';
import type { UserResponseDto } from '@/entities/user';

interface Props {
  prevUser: string | null;
  user: UserResponseDto | null;
  message: MessageResponseDto;
  idx: number;
}

export default function MessageItem(props: Props) {
  const { prevUser, user, message, idx } = props;

  const isMyMessage = message.nickName === user?.nickName;
  const isSystem = message.nickName === 'system';

  return (
    <Container
      key={message.chatId}
      sx={{
        padding: '0',
        marginBottom: '5px',
      }}
    >
      {isSystem ? (
        <SystemMessage message={message} />
      ) : isMyMessage ? (
        <MyMessage message={message} />
      ) : (
        <YourMessage
          prevUser={prevUser}
          user={user}
          message={message}
          idx={idx}
        />
      )}
    </Container>
  );
}
