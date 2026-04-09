import { expect, test } from "@playwright/test";

test.describe("Muse Spark homepage", () => {
  test("renders the main storytelling sections on desktop", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("link", { name: /start a spark/i })
    ).toBeVisible({ timeout: 15_000 });

    await expect(page.getByText(/where prompts become/i)).toBeVisible();
    await expect(page.getByText(/a conversation board that thinks in voice/i)).toBeVisible();
    await expect(page.getByText(/built to move from signal to system/i)).toBeVisible();
    await expect(
      page.getByText(/discover how other people turn prompts into systems/i)
    ).toBeVisible();
  });

  test("keeps the core flow accessible on mobile", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: /get beta/i })).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByRole("textbox", { name: /prompt composer/i })).toBeVisible();

    await page.locator("#sparks").scrollIntoViewIfNeeded();
    await expect(page.getByText(/discover how other people turn prompts into systems/i)).toBeVisible();

    await page.locator("#cta").scrollIntoViewIfNeeded();
    await expect(page.getByText(/build with a studio, not just a chat box/i)).toBeVisible();
  });
});
