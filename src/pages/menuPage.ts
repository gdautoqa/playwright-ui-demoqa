import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MenuPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/menu');
  }

  async hoverMainItem(itemText: string) {
    await this.page.getByText(itemText).hover();
  }
}
