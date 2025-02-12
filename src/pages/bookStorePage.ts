import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookStorePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/books');
  }

  async searchBook(bookTitle: string) {
    await this.page.getByPlaceholder(/search/i).fill(bookTitle);
  }

  async selectBook(bookTitle: string) {
    await this.page.getByText(bookTitle).click();
  }
}
