import styles from './SelectedTags.module.css';

export default function SelectedTags({ selectedTags, onRemoveTag }) {
  const { ingredients = [], appliances = [], ustensils = [] } = selectedTags;
  const hasSelectedTags = ingredients.length > 0 || appliances.length > 0 || ustensils.length > 0;

  const handleRemoveTag = (category, tag) => {
    if (onRemoveTag && typeof onRemoveTag === 'function') {
      onRemoveTag(category, tag);
    }
  };

  if (!hasSelectedTags) {
    return null;
  }

  return (
    <div className={styles.selectedTags}>
      <div className={styles.tagsContainer}>
        {ingredients.map((ingredient) => (
          <div key={`ingredient-${ingredient}`} className={styles.tag}>
            <span className={styles.tagText}>{ingredient}</span>
            <button 
              className={styles.removeButton}
              onClick={() => handleRemoveTag('ingredients', ingredient)}
              aria-label={`Supprimer le filtre ${ingredient}`}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0833 11.0833L6.08331 6.08334M6.08331 6.08334L1.08331 1.08334M6.08331 6.08334L11.0833 1.08334M6.08331 6.08334L1.08331 11.0833" stroke="#1B1B1B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
        
        {appliances.map((appliance) => (
          <div key={`appliance-${appliance}`} className={styles.tag}>
            <span className={styles.tagText}>{appliance}</span>
            <button 
              className={styles.removeButton}
              onClick={() => handleRemoveTag('appliances', appliance)}
              aria-label={`Supprimer le filtre ${appliance}`}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0833 11.0833L6.08331 6.08334M6.08331 6.08334L1.08331 1.08334M6.08331 6.08334L11.0833 1.08334M6.08331 6.08334L1.08331 11.0833" stroke="#1B1B1B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
        
        {ustensils.map((ustensil) => (
          <div key={`ustensil-${ustensil}`} className={styles.tag}>
            <span className={styles.tagText}>{ustensil}</span>
            <button 
              className={styles.removeButton}
              onClick={() => handleRemoveTag('ustensils', ustensil)}
              aria-label={`Supprimer le filtre ${ustensil}`}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0833 11.0833L6.08331 6.08334M6.08331 6.08334L1.08331 1.08334M6.08331 6.08334L11.0833 1.08334M6.08331 6.08334L1.08331 11.0833" stroke="#1B1B1B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}