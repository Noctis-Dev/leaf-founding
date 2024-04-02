import styles from '../assets/styles/ApiLoader.module.scss';

function ApiLoader() {
  return <p className={styles.loader}>Initializing API</p>;
}

export { ApiLoader };