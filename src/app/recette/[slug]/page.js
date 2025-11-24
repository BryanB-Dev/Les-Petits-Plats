import { notFound } from 'next/navigation';
import { getRecipeBySlug } from '../../../utils/recipes';
import { RecipeHeader } from '../../../components/recipe/RecipeDetail';
import { Header, Footer } from '../../../components/layout';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  
  if (!recipe) {
    return {
      title: 'Recette non trouvée - Les Petits Plats',
    };
  }

  return {
    title: `${recipe.name} - Les Petits Plats`,
    description: recipe.description.substring(0, 160),
    openGraph: {
      title: `${recipe.name} - Les Petits Plats`,
      description: recipe.description.substring(0, 160),
      images: [`/recipes/${recipe.image}`],
    },
  };
}

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.heroHeader}>
        <Header />
      </div>
      <main className={styles.main}>
        <RecipeHeader recipe={recipe} />
      </main>
      <Footer />
    </div>
  );
}