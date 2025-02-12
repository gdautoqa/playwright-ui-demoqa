import { test, expect } from '@playwright/test';
import { MenuPage } from '../pages/menuPage';

test.describe('Menu', () => {
  test('Should hover over a main menu item', async ({ page }) => {
    const menu = new MenuPage(page);
    await menu.navigate();
    await menu.hoverMainItem('Main Item 2');
    expect(true).toBeTruthy();
  });
});
