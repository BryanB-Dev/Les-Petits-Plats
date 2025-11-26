import styles from './SearchResults.module.css';

export default function SearchResults({ 
  searchTerm, 
  selectedTags, 
  totalRecipes, 
  filteredRecipes,
  onClearSearch,
  onClearAllFilters 
}) {
  const hasSearchTerm = searchTerm && searchTerm.length >= 3;
  const hasSelectedTags = selectedTags && (
    selectedTags.ingredients?.length > 0 || 
    selectedTags.appliances?.length > 0 || 
    selectedTags.ustensils?.length > 0
  );
  
  const hasActiveFilters = hasSearchTerm || hasSelectedTags;
  const isFiltered = filteredRecipes < totalRecipes;

  if (!hasActiveFilters && !isFiltered) {
    return null;
  }

  const selectedTagsCount = (selectedTags?.ingredients?.length || 0) + 
                           (selectedTags?.appliances?.length || 0) + 
                           (selectedTags?.ustensils?.length || 0);

  return (
    <div className={styles.searchResults}>
      <div className={styles.resultsInfo}>
        {hasSearchTerm && (
          <div className={styles.searchInfo}>
            <span className={styles.label}>Recherche :</span>
            <span className={styles.term}>"{searchTerm}"</span>
            {onClearSearch && (
              <button 
                className={styles.clearButton}
                onClick={onClearSearch}
                aria-label="Effacer la recherche"
              >
                ×
              </button>
            )}
          </div>
        )}
        
        {selectedTagsCount > 0 && (
          <div className={styles.filtersInfo}>
            <span className={styles.label}>
              {selectedTagsCount} filtre{selectedTagsCount > 1 ? 's' : ''} appliqué{selectedTagsCount > 1 ? 's' : ''}
            </span>
            {onClearAllFilters && (
              <button 
                className={styles.clearAllButton}
                onClick={onClearAllFilters}
              >
                Tout effacer
              </button>
            )}
          </div>
        )}
      </div>
      
      <div className={styles.resultsCount}>
        <span className={styles.count}>{filteredRecipes}</span>
        <span className={styles.countLabel}>
          recette{filteredRecipes !== 1 ? 's' : ''} trouvée{filteredRecipes !== 1 ? 's' : ''}
        </span>
        {isFiltered && (
          <span className={styles.totalInfo}>
            sur {totalRecipes} au total
          </span>
        )}
      </div>
    </div>
  );
}