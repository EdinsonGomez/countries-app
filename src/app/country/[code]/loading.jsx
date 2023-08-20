import styles from "src/styles/loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <span>Searching...</span>
    </div>
  )
}

export default Loading;