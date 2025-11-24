import Link from 'next/link';
import { Header, Footer } from '../../../components/layout';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.overlay}>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <h1 className={styles.title}>404 :(</h1>
            <p className={styles.description}>
              La page que vous demandez est introuvable.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );}