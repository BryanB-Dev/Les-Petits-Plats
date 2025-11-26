/**
 * Normalise une chaîne de caractères pour la recherche
 * - Supprime les accents
 * - Convertit en minuscules
 * - Supprime les espaces en début/fin
 */
export function normalizeString(str) {
  if (!str) return '';
  
  return str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .trim();
}

/**
 * Fonction de debounce pour optimiser les performances
 * Retarde l'exécution d'une fonction jusqu'à ce qu'un délai se soit écoulé
 */
export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Vérifie si une recette correspond au terme de recherche
 * Recherche dans tous les champs pertinents de la recette
 */
function matchesSearchTerm(recipe, normalizedSearchTerm) {
  // Recherche dans le nom de la recette
  const normalizedName = normalizeString(recipe.name);
  if (normalizedName.includes(normalizedSearchTerm)) {
    return true;
  }

  // Recherche dans la description
  const normalizedDescription = normalizeString(recipe.description);
  if (normalizedDescription.includes(normalizedSearchTerm)) {
    return true;
  }

  // Recherche dans les ingrédients
  const hasIngredientMatch = recipe.ingredients.some(ingredient => {
    const normalizedIngredient = normalizeString(ingredient.ingredient);
    return normalizedIngredient.includes(normalizedSearchTerm);
  });
  if (hasIngredientMatch) {
    return true;
  }

  // Recherche dans l'appareil
  const normalizedAppliance = normalizeString(recipe.appliance);
  if (normalizedAppliance.includes(normalizedSearchTerm)) {
    return true;
  }

  // Recherche dans les ustensiles
  const hasUstensilMatch = recipe.ustensils.some(ustensil => {
    const normalizedUstensil = normalizeString(ustensil);
    return normalizedUstensil.includes(normalizedSearchTerm);
  });
  if (hasUstensilMatch) {
    return true;
  }

  return false;
}

/**
 * Filtre les recettes selon le terme de recherche principal
 * La recherche ne se déclenche qu'à partir de 3 caractères minimum
 */
export function filterRecipesBySearch(recipes, searchTerm) {
  // Validation : minimum 3 caractères requis
  if (!searchTerm || searchTerm.trim().length < 3) {
    return recipes;
  }

  const normalizedSearchTerm = normalizeString(searchTerm);
  
  // Filtre les recettes qui correspondent au terme de recherche
  return recipes.filter(recipe => matchesSearchTerm(recipe, normalizedSearchTerm));
}

/**
 * Fonction de recherche combinée qui applique à la fois la recherche principale et les filtres par tags
 */
export function performCompleteSearch(allRecipes, searchTerm, selectedTags) {
  // D'abord, appliquer la recherche principale
  let filteredRecipes = filterRecipesBySearch(allRecipes, searchTerm);
  
  // Ensuite, appliquer les filtres par tags si nécessaire
  if (selectedTags && (selectedTags.ingredients?.length > 0 || selectedTags.appliances?.length > 0 || selectedTags.ustensils?.length > 0)) {
    // Filtre simple par tags sans import externe
    filteredRecipes = filteredRecipes.filter(recipe => {
      // Vérifier les ingrédients
      if (selectedTags.ingredients?.length > 0) {
        const hasAllIngredients = selectedTags.ingredients.every(selectedIngredient => {
          return recipe.ingredients.some(recipeIngredient => {
            const normalized = normalizeString(recipeIngredient.ingredient);
            return normalized.includes(normalizeString(selectedIngredient));
          });
        });
        if (!hasAllIngredients) return false;
      }

      // Vérifier les appareils
      if (selectedTags.appliances?.length > 0) {
        const normalizedAppliance = normalizeString(recipe.appliance);
        const hasAppliance = selectedTags.appliances.some(selectedAppliance => {
          return normalizedAppliance.includes(normalizeString(selectedAppliance));
        });
        if (!hasAppliance) return false;
      }

      // Vérifier les ustensiles
      if (selectedTags.ustensils?.length > 0) {
        const hasAllUstensils = selectedTags.ustensils.every(selectedUstensil => {
          return recipe.ustensils.some(recipeUstensil => {
            const normalized = normalizeString(recipeUstensil);
            return normalized.includes(normalizeString(selectedUstensil));
          });
        });
        if (!hasAllUstensils) return false;
      }

      return true;
    });
  }
  
  return filteredRecipes;
}

/**
 * Extrait les mots-clés d'un terme de recherche pour la recherche avancée
 * Divise la recherche en mots individuels pour une recherche plus flexible
 */
export function extractSearchKeywords(searchTerm) {
  if (!searchTerm || searchTerm.trim().length < 3) {
    return [];
  }
  
  const normalized = normalizeString(searchTerm);
  const keywords = normalized.split(/\s+/).filter(keyword => keyword.length >= 2);
  
  return keywords;
}

/**
 * Recherche avancée par mots-clés
 * Permet de trouver des recettes même si les mots ne sont pas dans l'ordre exact
 */
export function filterRecipesByKeywords(recipes, searchTerm) {
  const keywords = extractSearchKeywords(searchTerm);
  
  if (keywords.length === 0) {
    return recipes;
  }
  
  return recipes.filter(recipe => {
    // Concatène tous les champs de texte de la recette
    const allRecipeText = [
      recipe.name,
      recipe.description,
      recipe.appliance,
      ...recipe.ingredients.map(ing => ing.ingredient),
      ...recipe.ustensils
    ].join(' ');
    
    const normalizedRecipeText = normalizeString(allRecipeText);
    
    // Vérifie que tous les mots-clés sont présents quelque part dans la recette
    return keywords.every(keyword => 
      normalizedRecipeText.includes(keyword)
    );
  });
}