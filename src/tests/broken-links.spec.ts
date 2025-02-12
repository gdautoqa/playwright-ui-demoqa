import { test, expect } from '@playwright/test';
import { BrokenLinksPage } from '../pages/brokenLinksPage';

test.describe('Broken Links', () => {
  test('Should verify that images and links are not broken', async ({ page }) => {
    const brokenLinks = new BrokenLinksPage(page);
    await brokenLinks.navigate();
    const imageCount = await brokenLinks.image.count();
    expect(imageCount).toBeGreaterThan(0);
    await expect(brokenLinks.image.first()).toBeVisible();
    expect(await brokenLinks.image.first().getAttribute('src')).toBeTruthy();
  });
});
