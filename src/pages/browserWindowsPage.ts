import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BrowserWindowsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/browser-windows');
  }

  async openNewTab() {
    await this.page.getByRole('button', { name: /new tab/i }).click();
  }

  async openNewWindow() {
    await this.page.getByRole('button', { name: /new window/i }).click();
  }
}
