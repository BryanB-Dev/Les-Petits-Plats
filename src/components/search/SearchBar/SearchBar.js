'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './SearchBar.module.css';
import { debounce } from '../../../utils/search';

export default function SearchBar({ onSearch, searchTerm = '' }) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // Fonction de recherche avec debounce pour optimiser les performances
  const debouncedSearch = useCallback(
    debounce((term) => {
      if (onSearch) {
        onSearch(term);
      }
    }, 300), // Délai de 300ms
    [onSearch]
  );

  // Mise à jour de la recherche avec debounce
  useEffect(() => {
    debouncedSearch(localSearchTerm);
  }, [localSearchTerm, debouncedSearch]);

  // Synchronisation avec la prop searchTerm externe
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Recherche immédiate au clic sur le bouton (sans debounce)
    if (onSearch) {
      onSearch(localSearchTerm);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Recherche immédiate sur Entrée (sans debounce)
      if (onSearch) {
        onSearch(localSearchTerm);
      }
    }
  };

  const handleClear = () => {
    setLocalSearchTerm('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchBox} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rechercher une recette, un ingrédient, ..."
          className={styles.searchInput}
          value={localSearchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        {localSearchTerm && (
          <button 
            type="button" 
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Effacer la recherche"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0833 11.0833L6.08331 6.08334M6.08331 6.08334L1.08331 1.08334M6.08331 6.08334L11.0833 1.08334M6.08331 6.08334L1.08331 11.0833" stroke="#1B1B1B" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        <button type="submit" className={styles.searchButton} aria-label="Rechercher">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9.5" stroke="white" />
            <line x1="18.3536" y1="18.6464" x2="27.3536" y2="27.6464" stroke="white" />
          </svg>
        </button>
      </form>
    </div>
  );
}