import styles from './RecipeInstructions.module.css';

export default function RecipeInstructions({ recipe }) {
  return (
    <section className={styles.instructions}>
      <div className={styles.container}>
        <h2 className={styles.title}>RECETTE</h2>
        <div className={styles.description}>
          {recipe.description}
        </div>
      </div>
    </section>
  );
}