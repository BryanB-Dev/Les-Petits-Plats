import RecipeCard from '../RecipeCard';
import styles from './RecipeGrid.module.css';
import recipesData from '../../../data/recipes.json';

export default function RecipeGrid() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.recipeInfo}>
        <span className={styles.recipeCount}>{recipesData.length} recettes</span>
      </div>
      <div className={styles.grid}>
        {recipesData.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}