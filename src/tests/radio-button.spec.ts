import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../pages/radioButtonPage';

test.describe('Radio Button', () => {
  test('Should select the Yes radio button', async ({ page }) => {
    const radioButton = new RadioButtonPage(page);
    await radioButton.navigate();
    await radioButton.selectYes();
    expect(await page.locator('.text-success').textContent()).toContain('Yes');
  });
});
