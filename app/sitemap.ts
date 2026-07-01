import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aiconsulting.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://aiconsulting.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://aiconsulting.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://aiconsulting.vercel.app/industries",
      lastModified: new Date(),
    },
    {
      url: "https://aiconsulting.vercel.app/projects",
      lastModified: new Date(),
    },
    {
      url: "https://aiconsulting.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}