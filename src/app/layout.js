import "./globals.css";

export const metadata = {
  title: "Les Petits Plats - Recettes de cuisine",
  description: "Découvrez plus de 50 recettes de cuisine simples et délicieuses. Recherchez par ingrédients, ustensiles ou appareils.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
