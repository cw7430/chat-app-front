'use client';

import { useEffect, useState } from 'react';

import MessageList from '@/widgets/message-list/ui/MessageList';
import { InputField } from '@/features/chat/send-message';
import socket from '@/shared/config/socket.config';
import type { SocketResponse } from '@/shared/types';
import type {
  MessageListResponseDto,
  MessageResponseDto,
} from '@/entities/message';
import type { UserResponseDto } from '@/entities/user';

export default function HomeClient() {
  const [user, setUser] = useState<UserResponseDto | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messageList, setMessageList] = useState<MessageListResponseDto>([]);

  useEffect(() => {
    socket.on('message', (res: SocketResponse<MessageResponseDto>) => {
      if (res.ok) {
        setMessageList((prev) => prev.concat(res.data));
      }
    });
    askNickName();
  });

  const askNickName = () => {
    const nickName = prompt('당신의 이름을 입력하세요');
    console.log('사용자 이름:', nickName);

    socket.emit('login', nickName, (res: SocketResponse<UserResponseDto>) => {
      if (res.ok) {
        setUser(res.data);
      }
    });
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    socket.emit(
      'sendMessage',
      message,
      (res: SocketResponse<MessageResponseDto>) => {
        console.log('보낸 메세지:', res);
      },
    );
  };

  return (
    <>
      <MessageList messages={messageList} user={user} />
      <InputField
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </>
  );
}
