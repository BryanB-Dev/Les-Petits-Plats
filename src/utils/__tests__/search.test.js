import { 
  normalizeString, 
  filterRecipesBySearch,
  performCompleteSearch,
  extractSearchKeywords,
  filterRecipesByKeywords
} from '../search';

// Tests pour la normalisation des chaînes
console.group('Tests normalizeString');
console.log('Test accents:', normalizeString('café') === 'cafe'); // true
console.log('Test majuscules:', normalizeString('BONJOUR') === 'bonjour'); // true  
console.log('Test espaces:', normalizeString('  hello world  ') === 'hello world'); // true
console.log('Test combiné:', normalizeString('  CAFÉ à la vanille  ') === 'cafe a la vanille'); // true
console.groupEnd();

// Tests de données mockées
const mockRecipes = [
  {
    id: 1,
    name: 'Tarte aux pommes',
    description: 'Une délicieuse tarte aux pommes avec de la cannelle',
    ingredients: [
      { ingredient: 'pommes' },
      { ingredient: 'pâte brisée' },
      { ingredient: 'cannelle' }
    ],
    appliance: 'Four',
    ustensils: ['moule à tarte', 'couteau']
  },
  {
    id: 2,
    name: 'Salade de fruits',
    description: 'Une salade fraîche avec des fruits de saison',
    ingredients: [
      { ingredient: 'pommes' },
      { ingredient: 'bananes' },
      { ingredient: 'oranges' }
    ],
    appliance: 'Aucun',
    ustensils: ['saladier', 'couteau']
  },
  {
    id: 3,
    name: 'Café glacé',
    description: 'Un café froid parfait pour l\'été',
    ingredients: [
      { ingredient: 'café' },
      { ingredient: 'lait' },
      { ingredient: 'sucre' }
    ],
    appliance: 'Cafetière',
    ustensils: ['verre', 'cuillère']
  }
];

// Tests de recherche
console.group('Tests filterRecipesBySearch');

// Test recherche par nom
const resultsByName = filterRecipesBySearch(mockRecipes, 'tarte');
console.log('Recherche "tarte":', resultsByName.length === 1 && resultsByName[0].name === 'Tarte aux pommes');

// Test recherche par ingrédient  
const resultsByIngredient = filterRecipesBySearch(mockRecipes, 'pommes');
console.log('Recherche "pommes":', resultsByIngredient.length === 2);

// Test recherche par description
const resultsByDescription = filterRecipesBySearch(mockRecipes, 'été');
console.log('Recherche "été":', resultsByDescription.length === 1);

// Test recherche par appareil
const resultsByAppliance = filterRecipesBySearch(mockRecipes, 'four');
console.log('Recherche "four":', resultsByAppliance.length === 1);

// Test recherche par ustensile
const resultsByUstensil = filterRecipesBySearch(mockRecipes, 'saladier');
console.log('Recherche "saladier":', resultsByUstensil.length === 1);

// Test recherche avec accents
const resultsWithAccents = filterRecipesBySearch(mockRecipes, 'cafe');
console.log('Recherche "cafe" (sans accent):', resultsWithAccents.length === 1);

// Test recherche avec majuscules
const resultsWithCaps = filterRecipesBySearch(mockRecipes, 'CAFÉ');
console.log('Recherche "CAFÉ" (majuscules):', resultsWithCaps.length === 1);

// Test recherche moins de 3 caractères
const resultsShort = filterRecipesBySearch(mockRecipes, 'ca');
console.log('Recherche "ca" (< 3 chars):', resultsShort.length === mockRecipes.length);

console.groupEnd();

// Tests de recherche combinée
console.group('Tests performCompleteSearch');

const selectedTags = {
  ingredients: ['pommes'],
  appliances: [],
  ustensils: []
};

const combinedResults = performCompleteSearch(mockRecipes, 'tarte', selectedTags);
console.log('Recherche combinée "tarte" + pommes:', combinedResults.length === 1);

const combinedNoMatch = performCompleteSearch(mockRecipes, 'café', selectedTags);
console.log('Recherche combinée "café" + pommes:', combinedNoMatch.length === 0);

console.groupEnd();

// Tests d'extraction de mots-clés
console.group('Tests extractSearchKeywords');

const keywords1 = extractSearchKeywords('tarte aux pommes');
console.log('Mots-clés "tarte aux pommes":', keywords1.length === 3 && keywords1.includes('tarte'));

const keywords2 = extractSearchKeywords('ca'); // < 3 caractères
console.log('Mots-clés "ca":', keywords2.length === 0);

console.groupEnd();

console.log('🎉 Tests de la recherche terminés !');