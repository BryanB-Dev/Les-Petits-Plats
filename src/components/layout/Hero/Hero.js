import SearchBar from '../../search/SearchBar';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.logo}>
        <span className={styles.logoText}>LES PETITS PLATS</span>
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
          <path d="M22.0529 10.6255C22.0529 16.4938 17.1162 21.251 11.0265 21.251C4.93672 21.251 0 16.4938 0 10.6255C0 4.7572 4.93672 0 11.0265 0C17.1162 0 22.0529 4.7572 22.0529 10.6255Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M11.0265 19.6472C16.2869 19.6472 20.4491 15.5526 20.4491 10.6255C20.4491 5.69846 16.2869 1.60385 11.0265 1.60385C5.76599 1.60385 1.60385 5.69846 1.60385 10.6255C1.60385 15.5526 5.76599 19.6472 11.0265 19.6472ZM11.0265 21.251C17.1162 21.251 22.0529 16.4938 22.0529 10.6255C22.0529 4.7572 17.1162 0 11.0265 0C4.93672 0 0 4.7572 0 10.6255C0 16.4938 4.93672 21.251 11.0265 21.251Z" fill="black"/>
          <path d="M18.4443 10.6255C18.4443 14.7222 15.1232 18.0433 11.0264 18.0433C6.92971 18.0433 3.60864 14.7222 3.60864 10.6255C3.60864 6.52877 6.92971 3.2077 11.0264 3.2077C15.1232 3.2077 18.4443 6.52877 18.4443 10.6255Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M11.0264 16.4395C14.2374 16.4395 16.8404 13.8365 16.8404 10.6255C16.8404 7.41455 14.2374 4.81155 11.0264 4.81155C7.81549 4.81155 5.21249 7.41455 5.21249 10.6255C5.21249 13.8365 7.81549 16.4395 11.0264 16.4395ZM11.0264 18.0433C15.1232 18.0433 18.4443 14.7222 18.4443 10.6255C18.4443 6.52877 15.1232 3.2077 11.0264 3.2077C6.92971 3.2077 3.60864 6.52877 3.60864 10.6255C3.60864 14.7222 6.92971 18.0433 11.0264 18.0433Z" fill="black"/>
        </svg>
      </div>
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