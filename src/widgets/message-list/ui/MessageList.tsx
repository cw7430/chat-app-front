import { MessageItem, type MessageListResponseDto } from '@/entities/message';
import { type UserResponseDto } from '@/entities/user';

interface Props {
  messages: MessageListResponseDto;
  user: UserResponseDto | null;
}

export default function MessageList(props: Props) {
  const { messages, user } = props;

  return (
    <div>
      {messages.map((message, idx) => {
        const prevUser = messages[idx - 1]?.nickName;
        return (
          <MessageItem
            prevUser={prevUser}
            user={user}
            message={message}
            idx={idx}
          />
        );
      })}
    </div>
  );
}
