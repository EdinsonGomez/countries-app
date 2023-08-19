import Title from './Title';
import DarkBtn from 'src/components/darkBtn/DarkBtn';
import styles from "src/styles/header/header.module.css";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <Title>Where in the world?</Title>
      <DarkBtn />
    </header>
  )
}

export default HeaderComponent;