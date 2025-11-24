import styles from './RecipeDetails.module.css';

export default function RecipeDetails({ recipe }) {
  return (
    <section className={styles.details}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>INGRÉDIENTS</h2>
          <ul className={styles.ingredientsList}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className={styles.ingredient}>
                <span className={styles.ingredientName}>
                  {ingredient.ingredient}
                </span>
                <span className={styles.ingredientQuantity}>
                  {ingredient.quantity}
                  {ingredient.unit && ` ${ingredient.unit}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.column}>
          {recipe.ustensils && recipe.ustensils.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>USTENSILES NÉCESSAIRES</h2>
              <div className={styles.toolsList}>
                {recipe.ustensils.map((ustensil, index) => (
                  <span key={index} className={styles.tool}>
                    {ustensil}
                  </span>
                ))}
              </div>
            </>
          )}
          
          {recipe.appliance && (
            <>
              <h2 className={styles.sectionTitle}>APPAREILS NÉCESSAIRES</h2>
              <div className={styles.appliancesList}>
                <span className={styles.appliance}>
                  {recipe.appliance}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}