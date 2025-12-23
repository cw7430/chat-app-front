'use client';

import Image from 'next/image';

import styles from './MessageItem.module.css';
import type { MessageResponseDto } from '@/entities/message/schema/messageSchema';
import type { UserResponseDto } from '@/entities/user';

interface Props {
  prevUser: string | null;
  user: UserResponseDto | null;
  message: MessageResponseDto;
  idx: number;
}

export default function YourMessage(props: Props) {
  const { prevUser, user, message, idx } = props;
  return (
    <div className={styles.yourMessageContainer}>
      <Image
        src="/img/profile.jpeg"
        className={styles.profileImage}
        alt="프로필"
        style={
          idx === 0 || prevUser === user?.nickName || prevUser === 'system'
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      />
      <div className={styles.yourMessage}>{message.message}</div>
    </div>
  );
}
