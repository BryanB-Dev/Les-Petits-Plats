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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path 
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M21 21L16.5 16.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}