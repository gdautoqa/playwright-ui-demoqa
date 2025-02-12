import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckBoxPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/checkbox');
  }

  async expandAll() {
    await this.page.getByRole('button', { name: /expand all/i }).click();
  }

  async selectOption(option: string) {
    await this.page.locator('span.rct-title', { hasText: option }).click();
  }
}
