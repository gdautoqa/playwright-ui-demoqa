import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AutoCompletePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/auto-complete');
  }

  async enterText(text: string) {
    await this.page.locator('#autoCompleteMultipleContainer input').fill(text);
  }

  async selectOption(option: string) {
    await this.page.locator('.auto-complete__option', { hasText: option }).click();
  }
}
