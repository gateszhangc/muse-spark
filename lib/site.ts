export const siteConfig = {
  name: "Muse Spark",
  shortName: "Muse Spark",
  domain: "muse-spark.lol",
  url: "https://muse-spark.lol",
  title: "Muse Spark | AI Studio for Prompting, Remixing, and Creative Workflows",
  description:
    "Muse Spark is an AI studio and creative assistant for capturing prompts, remixing ideas, and turning them into launch-ready narratives, visuals, and workflows.",
  ogDescription:
    "Capture sparks, remix ideas, and shape them into launch-ready copy, visual direction, and creative workflows with Muse Spark.",
  locale: "en_US",
  language: "en-US",
  category: "productivity",
  themeColor: "#19161a",
  backgroundColor: "#f4efe8",
  accentColor: "#fb6b47",
  clarityProjectId: "w914vw15aa",
  seoPrimaryKeyword: "muse spark",
  keywords: [
    "Muse Spark",
    "muse spark",
    "AI studio",
    "creative assistant",
    "prompt workspace",
    "creative AI workspace",
    "AI prompt studio",
    "prompt remix tool",
    "idea generation workflow",
    "visual direction assistant",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function livePublicEnv(name: string) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}
