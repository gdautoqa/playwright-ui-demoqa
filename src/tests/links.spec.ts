import { test, expect } from '@playwright/test';
import { LinksPage } from '../pages/linksPage';

test.describe('Links', () => {
  test('should open simple link in a new tab', async ({ page }) => {
    const linksPage = new LinksPage(page);
    await linksPage.navigate();
    const [newPage] = await Promise.all([page.waitForEvent('popup'), linksPage.clickSimpleLink()]);
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://demoqa.com/');
    await newPage.close();
  });

  test('should open dynamic link in a new tab', async ({ page, context }) => {
    const linksPage = new LinksPage(page);
    await linksPage.navigate();
    const [newPage] = await Promise.all([context.waitForEvent('page'), linksPage.clickDynamicLink()]);
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://demoqa.com/');
    await newPage.close();
  });

  test('should display correct response when clicking created link', async ({ page }) => {
    const linksPage = new LinksPage(page);
    await linksPage.navigate();
    await linksPage.clickCreatedLink();
    await expect(linksPage.responseMessage).toHaveText(/201/);
  });
});
