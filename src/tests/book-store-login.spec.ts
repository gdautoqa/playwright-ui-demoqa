import { test, expect } from '@playwright/test';
import { BookStoreLoginPage } from '../pages/bookStoreLoginPage';

test.describe('Book Store Login', () => {
  test('Should login with valid credentials', async ({ page }) => {
    const loginPage = new BookStoreLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('testuser', 'Test@123');
    await expect(page).toHaveURL(/profile/);
  });
});
