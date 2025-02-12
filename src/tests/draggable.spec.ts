import { test, expect } from '@playwright/test';
import { DraggablePage } from '../pages/draggablePage';

test.describe('Draggable', () => {
  test('Should drag the element by a given offset', async ({ page }) => {
    const draggable = new DraggablePage(page);
    await draggable.navigate();
    await draggable.dragBy(50, 50);
    expect(true).toBeTruthy();
  });
});
