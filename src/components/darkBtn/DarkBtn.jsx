'use client'

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import styles from "src/styles/darkBtn/darkBtn.module.css";

const DarkBtn = () => {
  const [darkMode, setDarkMode] = useState(false);

  const onClick = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const dataTheme = darkMode ? 'dark' : 'light';
    document.body.dataset.theme = dataTheme;
  }, [darkMode])

  return (
    <div className={styles.darkMode} onClick={onClick}>
      <FontAwesomeIcon icon={faMoon} className={styles.darkMode_icon} />
      <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </div>
  )
};

export default DarkBtn;