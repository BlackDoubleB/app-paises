import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://explorador-de-paises-rb.vercel.app/", lastModified: new Date() },
    { url: "https://explorador-de-paises-rb.vercel.app/favoritos", lastModified: new Date() },
  ];
}
