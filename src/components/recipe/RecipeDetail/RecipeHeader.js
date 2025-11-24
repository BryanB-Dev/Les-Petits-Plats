'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './RecipeHeader.module.css';

export default function RecipeHeader({ recipe }) {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.imageContainer}>
          <Image
            src={`/recipes/${recipe.image}`}
            alt={recipe.name}
            fill
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{recipe.name}</h1>
          <div className={styles.timeContainer}>
            <span className={styles.timeLabel}>TEMPS DE PRÉPARATION</span>
            <div className={styles.timeValue}>
              {recipe.time}min
            </div>
          </div>
          
          <div className={styles.ingredientsSection}>
            <h2 className={styles.sectionTitle}>INGRÉDIENTS</h2>
            <div className={styles.ingredientsList}>
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className={styles.ingredient}>
                  <span className={styles.ingredientName}>
                    {ingredient.ingredient}
                  </span>
                  <span className={styles.ingredientQuantity}>
                    {ingredient.quantity}
                    {ingredient.unit && ` ${ingredient.unit}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {recipe.ustensils && recipe.ustensils.length > 0 && (
            <div className={styles.toolsSection}>
              <h2 className={styles.sectionTitle}>USTENSILES NÉCESSAIRES</h2>
              <div className={styles.toolsList}>
                {recipe.ustensils.map((ustensil, index) => (
                  <span key={index} className={styles.tool}>
                    {ustensil}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {recipe.appliance && (
            <div className={styles.appliancesSection}>
              <h2 className={styles.sectionTitle}>APPAREILS NÉCESSAIRES</h2>
              <div className={styles.appliancesList}>
                <span className={styles.appliance}>
                  {recipe.appliance}
                </span>
              </div>
            </div>
          )}
          
          <div className={styles.recipeSection}>
            <h2 className={styles.sectionTitle}>RECETTE</h2>
            <div className={styles.recipeDescription}>
              {recipe.description}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}