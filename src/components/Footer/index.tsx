import styles from './index.module.css';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>Video Inc.</span>
      <br />
      <span className={styles.copyright}>© 2024-2025</span>
    </p>
  );
}
