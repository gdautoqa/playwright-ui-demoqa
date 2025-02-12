import { test, expect } from '@playwright/test';
import { BrowserWindowsPage } from '../pages/browserWindowsPage';

test.describe('Browser Windows', () => {
  test('Should open a new tab', async ({ page, context }) => {
    const browserWindows = new BrowserWindowsPage(page);
    await browserWindows.navigate();
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      browserWindows.openNewTab(),
    ]);
    await newPage.waitForLoadState();
    expect(newPage.url()).not.toBe('');
    await newPage.close();
  });
});
