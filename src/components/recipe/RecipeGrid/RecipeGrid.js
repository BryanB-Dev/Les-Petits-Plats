import RecipeCard from '../RecipeCard';
import styles from './RecipeGrid.module.css';

export default function RecipeGrid({ recipes = [] }) {
  if (recipes.length === 0) {
    return (
      <div className={styles.gridContainer}>
        <div className={styles.noResults}>
          <p>Aucune recette ne correspond à vos critères de recherche.</p>
          <p>Vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}