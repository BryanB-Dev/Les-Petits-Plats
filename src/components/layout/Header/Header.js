import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>LES PETITS PLATS</span>
          <span className={styles.logoIcon}>©</span>
        </div>
      </div>
    </header>
  );
}