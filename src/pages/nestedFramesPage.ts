import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NestedFramesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/nestedframes');
  }

  async getFrameText() {
    const outerFrameLocator = this.page.frameLocator('iframe#frame1');
    const innerFrameLocator = outerFrameLocator.frameLocator('iframe');
    await innerFrameLocator.locator('body').waitFor({ state: 'visible', timeout: 10000 });
    return await innerFrameLocator.locator('body').textContent();
  }
}
