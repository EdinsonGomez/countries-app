import Title from './Title';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import styles from "../../styles/header/header.module.css";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <Title>Where in the world?</Title>
      <div className={styles.darkMode}>
        <FontAwesomeIcon icon={faMoon} className={styles.darkMode_icon} />
        <span>Dark Mode</span>
      </div>
    </header>
  )
}

export default HeaderComponent;