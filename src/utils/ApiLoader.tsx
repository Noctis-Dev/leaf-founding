import styles from '../assets/styles/ApiLoader.module.scss';

function ApiLoader() {
  return <p className={styles.loader+" h-screen text-white"}>Initializing API</p>;
}

export { ApiLoader };