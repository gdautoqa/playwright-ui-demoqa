import { test, expect } from '@playwright/test';
import { DroppablePage } from '../pages/droppablePage';

test.describe('Droppable', () => {
  test('Should drop the element successfully', async ({ page }) => {
    const droppable = new DroppablePage(page);
    await droppable.navigate();
    await droppable.drop();
    await expect(page.locator('#droppable').first()).toHaveText(/^Drop.*/);
  });
});
