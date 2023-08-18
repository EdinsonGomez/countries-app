'use client'

import { useRouter } from 'next/navigation';
import styles from 'src/styles/header/header.module.css';

const Title = ({ children }) => {
  const router = useRouter();

  return (
    <p
      className={styles.title}
      onClick={() => router.push('/')}
    >
      {children}
    </p>
  )
}

export default Title;