import { Hero, Footer } from '../components/layout';
import { FilterTags } from '../components/search';
import { RecipeGrid } from '../components/recipe';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <FilterTags />
      <RecipeGrid />
      <Footer />
    </div>
  );
}
