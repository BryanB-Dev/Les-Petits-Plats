'use client';

import styles from './RecipeCard.module.css';

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={`/recipes/${recipe.image}`} 
          alt={recipe.name}
          className={styles.image}
          onError={(e) => {
            e.target.src = '/placeholder-recipe.jpg';
          }}
        />
        <div className={styles.timeTag}>
          {recipe.time}min
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{recipe.name}</h3>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>RECETTE</h4>
          <p className={styles.description}>{recipe.description}</p>
        </div>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>INGRÉDIENTS</h4>
          <div className={styles.ingredients}>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={`${recipe.id}-ingredient-${index}`} className={styles.ingredient}>
                <span className={styles.ingredientName}>{ingredient.ingredient}</span>
                <span className={styles.ingredientQuantity}>
                  {ingredient.quantity && ingredient.quantity !== "" 
                    ? `${ingredient.quantity}${ingredient.unit ? ` ${ingredient.unit}` : ''}` 
                    : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}