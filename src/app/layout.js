import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header/Header";
import { Abel } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
const abel = Abel({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: "PSG Squad Project",
  description: "Un site web dédié à l'effectif du PSG pour la saison 2024-2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abel.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
