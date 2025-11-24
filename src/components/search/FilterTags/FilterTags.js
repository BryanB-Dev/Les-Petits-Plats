import styles from './FilterTags.module.css';
import recipesData from '../../../data/recipes.json';

export default function FilterTags() {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filtersWrapper}>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <button className={styles.filterButton}>
              Ingrédients
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className={styles.filterGroup}>
            <button className={styles.filterButton}>
              Appareils
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className={styles.filterGroup}>
            <button className={styles.filterButton}>
              Ustensiles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <span className={styles.recipeCount}>{recipesData.length} recettes</span>
      </div>
    </div>
  );
}