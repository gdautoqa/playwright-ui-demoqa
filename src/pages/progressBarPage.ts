import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProgressBarPage extends BasePage {
  readonly startButton: Locator;
  readonly progressBar: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    super(page);
    this.startButton = this.page.getByRole('button', { name: /start/i });
    this.progressBar = this.page.locator('#progressBar');
    this.resetButton = this.page.getByRole('button', { name: /reset/i });
  }

  async navigate() {
    await super.navigate('/progress-bar');
  }

  async startProgress() {
    await this.startButton.click();
  }

  async waitForProgressToComplete() {
    await this.progressBar.waitFor({ state: 'visible' });
  }

  async resetProgress() {
    await this.resetButton.click();
  }
}
