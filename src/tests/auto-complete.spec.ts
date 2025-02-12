import { test, expect } from '@playwright/test';
import { AutoCompletePage } from '../pages/autoCompletePage';

test.describe('AutoComplete', () => {
  test('Should select an auto-complete option', async ({ page }) => {
    const autoComplete = new AutoCompletePage(page);
    await autoComplete.navigate();
    await autoComplete.enterText('Red');
    await autoComplete.selectOption('Red');
    const selectedChip = page.locator('.auto-complete__multi-value__label').first();
    expect(await selectedChip.textContent()).toContain('Red');
  });
});
