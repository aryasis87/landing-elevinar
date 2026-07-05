import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["600", "700", "800", "900"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: 'Elevinar — Naikkan Level Skill-mu',
  description: 'Elevinar: tingkatkan wawasanmu melalui webinar interaktif dan inspiratif dari para ahli terbaik.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
