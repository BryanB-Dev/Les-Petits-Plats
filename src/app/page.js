import { Header, Hero, Footer } from '../components/layout';
import { FilterTags } from '../components/search';
import { RecipeGrid } from '../components/recipe';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <FilterTags />
      <RecipeGrid />
      <Footer />
    </div>
  );
}
