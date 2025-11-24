import Link from 'next/link';
import { Header, Footer } from '../../../components/layout';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Recette introuvable</h1>
          <p className={styles.description}>
            Désolé, la recette que vous recherchez n'existe pas ou a été supprimée.
          </p>
          <Link href="/" className={styles.homeLink}>
            Retourner à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}