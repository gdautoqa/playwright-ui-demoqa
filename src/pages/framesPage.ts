import { Page, FrameLocator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FramesPage extends BasePage {
  readonly frame: FrameLocator;

  constructor(page: Page) {
    super(page);
    this.frame = this.page.frameLocator('#frame1');
  }

  async navigate() {
    await super.navigate('/frames');
  }

  async getFrameTitle() {
    return await this.frame.getByRole('heading').textContent();
  }
}
