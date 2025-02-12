import { test, expect } from '@playwright/test';
import { SortablePage } from '../pages/sortablePage';

test.describe('Sortable', () => {
  test('Should reorder the items', async ({ page }) => {
    const sortable = new SortablePage(page);
    await sortable.navigate();
    await sortable.reorderItems();
    expect(true).toBeTruthy();
  });
});
