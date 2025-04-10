import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SortablePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/sortable');
  }

  async reorderItems() {
    const itemsLocator = this.page.locator('.list-group-item');
    await itemsLocator.first().waitFor({ state: 'visible', timeout: 5000 });
    const count = await itemsLocator.count();
    if (count < 2) {
      throw new Error('Not enough sortable items found.');
    }
    const firstItem = itemsLocator.nth(0);
    const secondItem = itemsLocator.nth(1);
    await firstItem.dragTo(secondItem);
  }
}
