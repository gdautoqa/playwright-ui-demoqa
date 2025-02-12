import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ToolTipsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/tool-tips');
  }

  async hoverOverButton() {
    await this.page.getByRole('button', { name: 'Hover me to see' }).hover();
  }
}
