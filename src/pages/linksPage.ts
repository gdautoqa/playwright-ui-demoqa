import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LinksPage extends BasePage {
  readonly responseMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.responseMessage = this.page.locator('#linkResponse');
  }

  async navigate() {
    await super.navigate('/links');
  }

  async clickSimpleLink() {
    await this.page.locator('#simpleLink').click();
  }

  async clickDynamicLink() {
    await this.page.locator('#dynamicLink').click();
  }

  async clickCreatedLink() {
    await this.page.getByRole('link', { name: /created/i }).click();
  }

  async getResponseText() {
    return await this.page.locator('#linkResponse').textContent();
  }
}
