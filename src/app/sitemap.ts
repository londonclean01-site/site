import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.london-clean01.co.uk";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/office",
    "/services/end-of-tenancy",
    "/services/after-builders",
    "/services/domestic",
    "/contact",
    "/blog",
    "/areas",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
