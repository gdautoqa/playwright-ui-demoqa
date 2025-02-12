import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SelectablePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/selectable');
  }

  async selectItem(itemText: string) {
    await this.page.getByText(itemText).click();
  }
}
