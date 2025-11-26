# Les Petits Plats 👨‍🍳

Un site de recettes de cuisine moderne développé avec Next.js, proposant plus de 50 recettes simples et délicieuses avec un système de recherche avancé.

![Les Petits Plats](./public/hero-image.jpg)

## 🚀 Fonctionnalités

### 🔍 Recherche Avancée
- **Recherche textuelle** dans les noms, descriptions, ingrédients, appareils et ustensiles
- **Filtrage par tags** avec trois catégories : Ingrédients, Appareils, Ustensiles
- **Recherche intelligente** insensible à la casse et aux accents
- **Performance optimisée** avec système de debounce
- **Minimum 3 caractères** pour déclencher la recherche

### 🏷️ Système de Tags
- **Sélection multiple** de tags par catégorie
- **Mise à jour dynamique** des tags disponibles
- **Suppression facile** des tags sélectionnés
- **Recherche dans les tags** pour chaque catégorie

### 📱 Interface Utilisateur
- **Design responsive** adapté à tous les écrans
- **Navigation fluide** entre les pages
- **Cartes recettes** interactives
- **Pages détaillées** pour chaque recette
- **Gestion d'erreur 404** personnalisée

## 🛠️ Technologies Utilisées

- **[Next.js 16](https://nextjs.org/)** - Framework React avec App Router
- **[React 19](https://react.dev/)** - Bibliothèque UI avec hooks
- **CSS Modules** - Styles composants isolés
- **Anton Font** - Typography moderne
- **SVG Icons** - Icônes vectorielles optimisées

## 📦 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/BryanB-Dev/Les-Petits-Plats.git
cd Les-Petits-Plats
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Ouvrir dans le navigateur**

Allez sur [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## 📁 Structure du Projet

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css         # Styles globaux
│   ├── layout.js          # Layout racine
│   ├── page.js            # Page d'accueil
│   └── recette/           # Routes dynamiques
│       └── [slug]/        # Pages de recettes
├── components/            # Composants React
│   ├── layout/            # Header, Hero, Footer
│   ├── recipe/            # Composants recettes
│   └── search/            # Système de recherche
├── data/                  # Données JSON
│   └── recipes.json       # Base de données des recettes
└── utils/                 # Fonctions utilitaires
    ├── search.js          # Logique de recherche
    ├── tags.js            # Gestion des tags
    └── recipes.js         # Utilitaires recettes
```

## 🧩 Composants Principaux

### Layout
- `Header` - Navigation principale avec logo
- `Hero` - Section d'accueil avec barre de recherche
- `Footer` - Pied de page avec copyright

### Recettes
- `RecipeCard` - Carte recette réutilisable
- `RecipeGrid` - Grille d'affichage des recettes
- `RecipeDetail` - Composants de page recette détaillée

### Recherche
- `SearchBar` - Barre de recherche principale
- `FilterTags` - Interface de filtrage par tags
- `TagDropdown` - Dropdown de sélection de tags
- `SelectedTags` - Affichage des tags sélectionnés

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancement en production
npm start

# Lint du code
npm run lint
```

## 🌐 Déploiement

Le projet peut être déployé facilement sur [Vercel](https://vercel.com) :

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Votre site sera déployé à chaque push sur la branche main

## 📖 API et Données

### Format des Recettes
Chaque recette contient :
```json
{
  "id": 1,
  "name": "Nom de la recette",
  "slug": "nom-de-la-recette",
  "image": "recette01.jpg",
  "servings": 4,
  "time": 30,
  "description": "Instructions de préparation",
  "appliance": "Four",
  "ustensils": ["couteau", "saladier"],
  "ingredients": [
    {
      "ingredient": "Nom ingrédient",
      "quantity": 200,
      "unit": "grammes"
    }
  ]
}
```

### Recherche
La recherche fonctionne sur tous les champs textuels :
- Nom de la recette
- Description
- Ingrédients
- Appareils
- Ustensiles

## 🎨 Design

- **Police principale** : Manrope (lisibilité optimale)
- **Police titres** : Anton (impact visuel)
- **Couleurs** :
  - Jaune principal : `#FFD15B`
  - Noir texte : `#1B1B1B`
  - Gris arrière-plan : `#EDEDED`
  - Blanc : `#FFFFFF`

## 🚀 Performances

- **Optimisation Next.js** : Images, fonts et bundle automatiquement optimisés
- **Debounce** : Recherche optimisée avec délai de 300ms
- **CSS Modules** : Styles scopés pour éviter les conflits
- **Lazy Loading** : Chargement différé des images

## 📱 Responsive Design

- **Desktop** : Expérience complète avec grille 3 colonnes
- **Tablet** : Grille adaptive 2 colonnes
- **Mobile** : Interface optimisée 1 colonne
- **Navigation** : Menu burger sur mobile

## 🧪 Tests

Pour tester les fonctionnalités :

1. **Recherche textuelle** : Tapez "tarte" dans la barre de recherche
2. **Filtres par tags** : Sélectionnez des ingrédients comme "pommes"
3. **Recherche combinée** : Utilisez recherche + tags ensemble
4. **Navigation** : Cliquez sur une carte recette pour voir les détails
5. **404** : Essayez une URL invalide comme `/recette/inexistante`

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'Add amazing feature'`)
4. Push sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est développé dans le cadre de la formation OpenClassrooms - Développeur d'application JavaScript React.

---

**Développé avec ❤️ par [BryanB-Dev](https://github.com/BryanB-Dev)**
