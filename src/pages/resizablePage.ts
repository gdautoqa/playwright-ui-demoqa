import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ResizablePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/resizable');
  }

  async resize() {
    const box = this.locator('#resizableBoxWithRestriction');
    await box.scrollIntoViewIfNeeded();
    const handle = box.locator('.react-resizable-handle');
    const boxBounding = await box.boundingBox();
    const handleBounding = await handle.boundingBox();
    if (boxBounding && handleBounding) {
      const startX = handleBounding.x + handleBounding.width / 2;
      const startY = handleBounding.y + handleBounding.height / 2;
      await this.page.mouse.move(startX, startY);
      await this.page.mouse.down();
      await this.page.mouse.move(startX + 150, startY, { steps: 10 });
      await this.page.mouse.up();
    }
  }
}
