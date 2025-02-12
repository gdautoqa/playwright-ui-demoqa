import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DraggablePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/dragabble');
  }

  async dragBy(offsetX: number, offsetY: number) {
    const handle = this.locator('#dragBox');
    await handle.dragTo(this.page.locator('body'), { targetPosition: { x: offsetX, y: offsetY } });
  }
}
