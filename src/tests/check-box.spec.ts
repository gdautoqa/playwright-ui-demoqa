import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../pages/checkBoxPage';

test.describe('Check Box', () => {
  test('Should expand all and select an option', async ({ page }) => {
    const checkBox = new CheckBoxPage(page);
    await checkBox.navigate();
    await checkBox.expandAll();
    await checkBox.selectOption('Downloads');
    const downloadsElement = page.locator('.text-success', { hasText: 'downloads' }).first();
    await expect(downloadsElement).toBeVisible();
    expect(await downloadsElement.textContent()).toContain('downloads');
  });
});
