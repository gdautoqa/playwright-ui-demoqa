import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BrokenLinksPage extends BasePage {
  readonly image: Locator;
  readonly link: Locator;

  constructor(page: Page) {
    super(page);
    this.image = page.getByRole('img');
    this.link = page.getByRole('link', { name: /broken link/i });
  }

  async navigate() {
    await super.navigate('/broken');
  }
}
