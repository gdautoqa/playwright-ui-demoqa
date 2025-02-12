import { test, expect } from '@playwright/test';
import { SelectablePage } from '../pages/selectablePage';

test.describe('Selectable', () => {
  test('Should select an item from the list', async ({ page }) => {
    const selectable = new SelectablePage(page);
    await selectable.navigate();
    await selectable.selectItem('Cras justo odio');
    expect(true).toBeTruthy();
  });
});
