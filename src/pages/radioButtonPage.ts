import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RadioButtonPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/radio-button');
  }

  async selectYes() {
    await this.page.evaluate(() => {
      document.querySelectorAll('iframe[id^="google_ads_iframe"]').forEach((el) => el.remove());
    });
    await this.page.locator('label[for="yesRadio"]').click();
  }

  async selectImpressive() {
    await this.page.getByLabel('Impressive').click();
  }
}
