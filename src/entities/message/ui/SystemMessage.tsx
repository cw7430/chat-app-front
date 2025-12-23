'use client';

import styles from './MessageItem.module.css';
import type { MessageResponseDto } from '@/entities/message/schema/messageSchema';

interface Props {
  message: MessageResponseDto;
}

export default function SystemMessage(props: Props) {
  const { message } = props;

  return (
    <div className={styles.systemMessageContainer}>
      <p className={styles.systemMessage}>{message.message}</p>
    </div>
  );
}
