import recipesData from '../data/recipes.json';

/**
 * Extrait tous les ingrédients uniques de toutes les recettes
 * @param {Array} recipes - Tableau des recettes à analyser
 * @returns {Array} - Tableau des ingrédients uniques triés
 */
export function getUniqueIngredients(recipes = recipesData) {
  const ingredients = new Set();
  
  recipes.forEach(recipe => {
    if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
      recipe.ingredients.forEach(item => {
        if (item.ingredient) {
          ingredients.add(item.ingredient.trim());
        }
      });
    }
  });
  
  return Array.from(ingredients).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

/**
 * Extrait tous les appareils uniques de toutes les recettes
 * @param {Array} recipes - Tableau des recettes à analyser
 * @returns {Array} - Tableau des appareils uniques triés
 */
export function getUniqueAppliances(recipes = recipesData) {
  const appliances = new Set();
  
  recipes.forEach(recipe => {
    if (recipe.appliance) {
      appliances.add(recipe.appliance.trim());
    }
  });
  
  return Array.from(appliances).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

/**
 * Extrait tous les ustensiles uniques de toutes les recettes
 * @param {Array} recipes - Tableau des recettes à analyser
 * @returns {Array} - Tableau des ustensiles uniques triés
 */
export function getUniqueUstensils(recipes = recipesData) {
  const ustensils = new Set();
  
  recipes.forEach(recipe => {
    if (recipe.ustensils && Array.isArray(recipe.ustensils)) {
      recipe.ustensils.forEach(ustensil => {
        if (ustensil) {
          ustensils.add(ustensil.trim());
        }
      });
    }
  });
  
  return Array.from(ustensils).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

/**
 * Filtre les recettes selon les tags sélectionnés
 * @param {Array} recipes - Tableau des recettes
 * @param {Object} selectedTags - Object contenant les tags sélectionnés par catégorie
 * @returns {Array} - Tableau des recettes filtrées
 */
export function filterRecipesByTags(recipes = recipesData, selectedTags = {}) {
  const { ingredients = [], appliances = [], ustensils = [] } = selectedTags;
  
  if (ingredients.length === 0 && appliances.length === 0 && ustensils.length === 0) {
    return recipes;
  }
  
  return recipes.filter(recipe => {
    // Vérifier les ingrédients
    if (ingredients.length > 0) {
      const recipeIngredients = recipe.ingredients?.map(item => 
        item.ingredient?.toLowerCase().trim()
      ) || [];
      
      const hasAllIngredients = ingredients.every(ingredient => 
        recipeIngredients.includes(ingredient.toLowerCase())
      );
      
      if (!hasAllIngredients) return false;
    }
    
    // Vérifier les appareils
    if (appliances.length > 0) {
      const recipeAppliance = recipe.appliance?.toLowerCase().trim();
      const hasAppliance = appliances.some(appliance => 
        appliance.toLowerCase() === recipeAppliance
      );
      
      if (!hasAppliance) return false;
    }
    
    // Vérifier les ustensiles
    if (ustensils.length > 0) {
      const recipeUstensils = recipe.ustensils?.map(ustensil => 
        ustensil.toLowerCase().trim()
      ) || [];
      
      const hasAllUstensils = ustensils.every(ustensil => 
        recipeUstensils.includes(ustensil.toLowerCase())
      );
      
      if (!hasAllUstensils) return false;
    }
    
    return true;
  });
}

/**
 * Filtre les tags pour exclure ceux qui sont déjà sélectionnés
 * @param {Array} allTags - Tous les tags disponibles
 * @param {Array} selectedTags - Tags déjà sélectionnés
 * @returns {Array} - Tags disponibles (non sélectionnés)
 */
export function getAvailableTags(allTags, selectedTags = []) {
  const selectedLowerCase = selectedTags.map(tag => tag.toLowerCase().trim());
  return allTags.filter(tag => !selectedLowerCase.includes(tag.toLowerCase().trim()));
}

/**
 * Recherche dans une liste de tags selon une query
 * @param {Array} tags - Liste des tags
 * @param {string} query - Terme de recherche
 * @returns {Array} - Tags filtrés
 */
export function searchInTags(tags, query) {
  if (!query || query.trim() === '') {
    return tags;
  }
  
  const searchTerm = query.toLowerCase().trim();
  return tags.filter(tag => 
    tag.toLowerCase().includes(searchTerm)
  );
}