import { Page } from '@playwright/test';

export class BasePage {
  constructor(public page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async fill(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  locator(selector: string) {
    return this.page.locator(selector);
  }
}
