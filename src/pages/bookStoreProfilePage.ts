import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookStoreProfilePage extends BasePage {
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.logoutButton = this.page.getByRole('button', { name: 'Log out' });
  }

  async navigate() {
    await super.navigate('/profile');
  }

  async logout() {
    // Action only; validation should be handled in the spec file.
    await this.logoutButton.click({ force: true });
    await this.page.waitForURL('**/login');
  }

  async addBook(bookTitle: string) {
    await this.click(`text=${bookTitle}`);
    await this.click('#addNewRecordButton');
  }
}
