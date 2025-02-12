import { test, expect } from '@playwright/test';
import { ResizablePage } from '../pages/resizablePage';

test.describe('Resizable', () => {
  test('Should resize the element', async ({ page }) => {
    const resizable = new ResizablePage(page);
    await resizable.navigate();
    await resizable.resize();
    const box = page.locator('#resizableBoxWithRestriction');
    const width = await box.evaluate((el) => window.getComputedStyle(el).width);
    expect(parseInt(width)).toBeGreaterThanOrEqual(200);
  });
});
