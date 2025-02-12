import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookStoreLoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/login');
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder('UserName').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: /login/i }).click();
  }
}
