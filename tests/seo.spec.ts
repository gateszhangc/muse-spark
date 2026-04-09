import { expect, test } from "@playwright/test";

test.describe("Muse Spark SEO routes", () => {
  test("renders canonical metadata and structured data on the homepage", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
      "href",
      "https://muse-spark.lol"
    );
    await expect(page.locator("meta[name='description']")).toHaveAttribute(
      "content",
      /AI studio and creative assistant/i
    );
    await expect(page.locator("script[type='application/ld+json']")).toHaveCount(3);
    await expect(page.locator("script#clarity")).toHaveCount(1);
  });

  test("serves robots, sitemap, manifest, and social image routes", async ({
    page,
  }) => {
    const robots = await page.request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain("Sitemap: https://muse-spark.lol/sitemap.xml");

    const sitemap = await page.request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    expect(await sitemap.text()).toContain("https://muse-spark.lol/");

    const manifest = await page.request.get("/manifest.webmanifest");
    expect(manifest.ok()).toBeTruthy();
    const manifestJson = await manifest.json();
    expect(manifestJson.name).toBe("Muse Spark");

    const ogImage = await page.request.get("/opengraph-image");
    expect(ogImage.ok()).toBeTruthy();
    expect(ogImage.headers()["content-type"]).toContain("image/png");
  });
});
