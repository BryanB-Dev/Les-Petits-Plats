import { useState, useEffect } from 'react';
import styles from './FilterTags.module.css';
import TagDropdown from '../TagDropdown';
import SelectedTags from '../SelectedTags';
import { getUniqueIngredients, getUniqueAppliances, getUniqueUstensils, getAvailableTags } from '../../../utils/tags';

export default function FilterTags({ 
  filteredRecipes, 
  totalRecipes, 
  selectedTags, 
  onTagSelect,
  onTagRemove 
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [availableAppliances, setAvailableAppliances] = useState([]);
  const [availableUstensils, setAvailableUstensils] = useState([]);

  useEffect(() => {
    // Mettre à jour les tags disponibles basés sur les recettes filtrées
    const allIngredients = getUniqueIngredients(filteredRecipes);
    const allAppliances = getUniqueAppliances(filteredRecipes);
    const allUstensils = getUniqueUstensils(filteredRecipes);

    // Exclure les tags déjà sélectionnés
    setAvailableIngredients(getAvailableTags(allIngredients, selectedTags.ingredients || []));
    setAvailableAppliances(getAvailableTags(allAppliances, selectedTags.appliances || []));
    setAvailableUstensils(getAvailableTags(allUstensils, selectedTags.ustensils || []));
  }, [filteredRecipes, selectedTags]);

  const handleDropdownToggle = (dropdownName, isOpen) => {
    if (isOpen) {
      setOpenDropdown(dropdownName);
    } else {
      setOpenDropdown(null);
    }
  };

  const handleTagSelect = (category, tag) => {
    if (onTagSelect && typeof onTagSelect === 'function') {
      onTagSelect(category, tag);
    }
    
    setOpenDropdown(null);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filtersWrapper}>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <TagDropdown
              title="Ingrédients"
              tags={availableIngredients}
              onSelectTag={(tag) => handleTagSelect('ingredients', tag)}
              searchPlaceholder="Rechercher un ingrédient..."
              isOpen={openDropdown === 'ingredients'}
              onToggle={(isOpen) => handleDropdownToggle('ingredients', isOpen)}
            />
          </div>
          
          <div className={styles.filterGroup}>
            <TagDropdown
              title="Appareils"
              tags={availableAppliances}
              onSelectTag={(tag) => handleTagSelect('appliances', tag)}
              searchPlaceholder="Rechercher un appareil..."
              isOpen={openDropdown === 'appliances'}
              onToggle={(isOpen) => handleDropdownToggle('appliances', isOpen)}
            />
          </div>
          
          <div className={styles.filterGroup}>
            <TagDropdown
              title="Ustensiles"
              tags={availableUstensils}
              onSelectTag={(tag) => handleTagSelect('ustensils', tag)}
              searchPlaceholder="Rechercher un ustensile..."
              isOpen={openDropdown === 'ustensils'}
              onToggle={(isOpen) => handleDropdownToggle('ustensils', isOpen)}
            />
          </div>
        </div>
        
        <span className={styles.recipeCount}>
          {totalRecipes} {totalRecipes === 1 ? 'recette' : 'recettes'}
        </span>
      </div>
      
      <SelectedTags
        selectedTags={selectedTags}
        onRemoveTag={onTagRemove}
      />
    </div>
  );
}