// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/about",
        "/services",
        "/contact",
        "/blog",
        "/faq",
        "/assets/",
        "/public/",
      ],
      disallow: [
        "/admin/",
        "/admin",
        "/blog-admin.html",
        "/seo-dashboard.html",
        "/app/",
        "/components/",
        "/lib/",
      ],
    },
    sitemap: "https://outprixrealestate.property/sitemap.xml",
  };
}
