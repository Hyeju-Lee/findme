import { expect, test } from "@playwright/test";

test("홈 화면에서 CLICK ME 게임이 열린다", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("CLICK ME");
  await expect(page.locator("canvas#c")).toBeVisible();
});
