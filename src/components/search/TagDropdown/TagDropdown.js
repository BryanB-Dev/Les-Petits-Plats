import { useState, useRef, useEffect } from 'react';
import styles from './TagDropdown.module.css';

export default function TagDropdown({ 
  title, 
  tags, 
  onSelectTag, 
  searchPlaceholder = "Rechercher...",
  isOpen, 
  onToggle 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTags, setFilteredTags] = useState(tags);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredTags(tags);
    } else {
      const filtered = tags.filter(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      setFilteredTags(filtered);
    }
  }, [searchQuery, tags]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignorer si c'est un clic sur un tag
      if (event.target.closest('.tagItem') || event.target.classList.contains('tagItem')) {
        return;
      }
      
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isOpen) {
        onToggle(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onToggle, isOpen]);

  const handleTagSelect = (tag) => {
    if (onSelectTag && typeof onSelectTag === 'function') {
      onSelectTag(tag);
    }
    
    setSearchQuery('');
    onToggle(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(!isOpen);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownButton}
        onClick={handleButtonClick}
        type="button"
      >
        {title}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdownContent}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
              autoFocus
            />
          </div>
          
          <div className={styles.tagsList}>
            {filteredTags.length > 0 ? (
              filteredTags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.tagItem} tagItem`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleTagSelect(tag);
                  }}
                  type="button"
                >
                  {tag}
                </button>
              ))
            ) : (
              <div className={styles.noResults}>Aucun résultat trouvé</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}