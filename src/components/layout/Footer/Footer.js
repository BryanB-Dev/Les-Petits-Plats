import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          Copyright © 2021 - Les Petits Plats
        </p>
      </div>
    </footer>
  );
}