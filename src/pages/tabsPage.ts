import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TabsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/tabs');
  }

  async selectTab(tabName: string) {
    await this.page.getByRole('tab', { name: tabName }).click();
  }
}
