import styles from './page.module.css';
import HomeClient from '@/client/home';

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeClient />
    </div>
  );
}
