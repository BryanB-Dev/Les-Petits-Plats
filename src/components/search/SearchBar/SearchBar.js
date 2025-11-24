import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Rechercher une recette, un ingrédient, ..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9.5" stroke="white" />
            <line x1="18.3536" y1="18.6464" x2="27.3536" y2="27.6464" stroke="white" />
          </svg>
        </button>
      </div>
    </div>
  );
}