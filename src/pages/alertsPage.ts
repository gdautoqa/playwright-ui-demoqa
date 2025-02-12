import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AlertsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/alerts');
  }

  async triggerAlert() {
    await this.page.getByRole('button', { name: 'Click me' }).first().click();
  }

  async triggerTimerAlert() {
    await this.page.getByRole('button', { name: /timer alert/i }).click();
  }

  async triggerConfirmAlert() {
    await this.page.getByRole('button', { name: 'Click me' }).nth(1).click();
  }

  async triggerPromptAlert() {
    await this.page.getByRole('button', { name: 'Click me' }).nth(2).click();
  }
}
