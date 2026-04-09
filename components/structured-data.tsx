import { absoluteUrl, siteConfig } from "@/lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/brand/muse-spark-mark.png"),
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.ogDescription,
    inLanguage: siteConfig.language,
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AI Studio",
    operatingSystem: "Web",
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image"),
    screenshot: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    keywords: siteConfig.keywords.join(", "),
  },
];

export function StructuredData() {
  return (
    <>
      {structuredData.map((entry) => (
        <script
          key={entry["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
