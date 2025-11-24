import recipesData from '../data/recipes.json';

/**
 * Récupère une recette par son slug
 * @param {string} slug - Le slug de la recette
 * @returns {object|null} - La recette trouvée ou null
 */
export function getRecipeBySlug(slug) {
  return recipesData.find(recipe => recipe.slug === slug) || null;
}

/**
 * Récupère tous les slugs des recettes pour la génération statique
 * @returns {Array} - Tableau des slugs
 */
export function getAllRecipeSlugs() {
  return recipesData.map(recipe => recipe.slug);
}

/**
 * Génère un slug à partir d'un nom de recette
 * @param {string} name - Le nom de la recette
 * @returns {string} - Le slug généré
 */
export function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[àáâäã]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôöõ]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}