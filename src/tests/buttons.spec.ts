import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../pages/buttonsPage';

test.describe('Buttons', () => {
  test('Should perform double click, right click, and dynamic click', async ({ page }) => {
    const buttons = new ButtonsPage(page);
    await buttons.navigate();
    await buttons.doubleClick();
    await buttons.rightClick();
    await buttons.clickDynamic();
    expect(await page.locator('#doubleClickMessage').textContent()).toContain('double click');
  });
});
