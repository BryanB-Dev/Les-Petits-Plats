import SearchBar from '../../search/SearchBar';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>DÉCOUVREZ NOS RECETTES<br />DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES</h1>
        </div>
        <div className={styles.searchWrapper}>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}