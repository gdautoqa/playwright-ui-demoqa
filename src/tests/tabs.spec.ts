import { test, expect } from '@playwright/test';
import { TabsPage } from '../pages/tabsPage';

test.describe('Tabs', () => {
  test('Should switch to a specific tab', async ({ page }) => {
    const tabsPage = new TabsPage(page);
    await tabsPage.navigate();
    await tabsPage.selectTab('Origin');
    const content = await page.locator('.tab-content').textContent();
    expect(content).toContain('Lorem Ipsum');
  });
});
