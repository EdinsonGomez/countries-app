'use client'

import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import styles from 'src/styles/country/backBtn.module.css';

const BackBtn = () => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  }

  return (
    <div className={styles.backBtn_container} onClick={onClick}>
      <div className={styles.backBtn}>
        <FontAwesomeIcon icon={faArrowLeftLong} className={styles.backBtn_icon} />
        <span>
          Back
        </span>
      </div>
    </div>
  )
}

export default BackBtn;