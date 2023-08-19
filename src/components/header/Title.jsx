'use client'

import { useRouter } from 'next/navigation';
import styles from 'src/styles/header/header.module.css';

const Title = ({ children }) => {
  const router = useRouter();

  return (
    <h1
      className={styles.title}
      onClick={() => router.push('/')}
    >
      {children}
    </h1>
  )
}

export default Title;