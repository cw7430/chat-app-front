'use client';

import styles from './MessageItem.module.css';
import type { MessageResponseDto } from '@/entities/message/schema/messageSchema';

interface Props {
  message: MessageResponseDto;
}

export default function MyMessage(props: Props) {
  const { message } = props;

  return (
    <div className={styles.myMessageContainer}>
      <div className={styles.myMessage}>{message.message}</div>
    </div>
  );
}
