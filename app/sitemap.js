import { PEMBICARA, SITE } from "@/lib/acara";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/buku-acara`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...PEMBICARA.map((p) => ({ url: `${SITE}/pembicara/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })),
  ];
}
