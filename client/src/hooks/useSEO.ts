import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://vrindavantirth.com/og-image.jpg",
  ogType = "website",
  keywords,
}: SEOOptions) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector
          .replace("meta[", "")
          .replace("]", "")
          .replace(/"/g, "")
          .split("=");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Helper for link tags
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    // Primary meta
    setMeta('meta[name="description"]', "content", description);
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);
    if (canonical) setLink("canonical", canonical);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", ogTitle || title);
    setMeta('meta[property="og:description"]', "content", ogDescription || description);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[property="og:type"]', "content", ogType);
    if (canonical) setMeta('meta[property="og:url"]', "content", canonical);

    // Twitter
    setMeta('meta[name="twitter:title"]', "content", ogTitle || title);
    setMeta('meta[name="twitter:description"]', "content", ogDescription || description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, keywords]);
}
