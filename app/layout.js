import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: ["600", "700", "800", "900"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Elevinar","description":"Platform webinar interaktif","url":"https://landing-elevinar.vercel.app","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-elevinar.vercel.app"),
  title: "Elevinar — Naikkan Level Skill-mu",
  description: "Elevinar: tingkatkan wawasanmu melalui webinar interaktif dan inspiratif dari para ahli terbaik.",
  applicationName: "Elevinar",
  keywords: ["webinar", "kelas online", "pelatihan", "skill", "seminar online"],
  authors: [{ name: "Elevinar" }],
  creator: "Elevinar",
  publisher: "Elevinar",
  alternates: { canonical: "https://landing-elevinar.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-elevinar.vercel.app",
    siteName: "Elevinar",
    title: "Elevinar — Naikkan Level Skill-mu",
    description: "Elevinar: tingkatkan wawasanmu melalui webinar interaktif dan inspiratif dari para ahli terbaik.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Elevinar — Naikkan Level Skill-mu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevinar — Naikkan Level Skill-mu",
    description: "Elevinar: tingkatkan wawasanmu melalui webinar interaktif dan inspiratif dari para ahli terbaik.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
