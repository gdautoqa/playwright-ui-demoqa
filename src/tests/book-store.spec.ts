import { test, expect } from '@playwright/test';
import { BookStorePage } from '../pages/bookStorePage';

test.describe('Book Store', () => {
  test('Should search and select a book', async ({ page }) => {
    const bookStore = new BookStorePage(page);
    await bookStore.navigate();
    await bookStore.searchBook('Git Pocket Guide');
    await bookStore.selectBook('Git Pocket Guide');
    expect(await page.title()).toContain('DEMOQA');
  });
});
