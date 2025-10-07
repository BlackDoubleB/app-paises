import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://explorador-de-paises.vercel.app/", lastModified: new Date() },
    { url: "https://explorador-de-paises.vercel.app/favoritos", lastModified: new Date() },
  ];
}
