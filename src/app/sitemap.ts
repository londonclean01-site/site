import { Metadata, Route } from "next";

export default function sitemap(): Metadata & { url: string; lastModified?: string; changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"; priority?: number; }[] {
  const baseUrl = "https://london-clean.com"; // TODO: Replace with env var

  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
