import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PracticeFormPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/automation-practice-form');
    await this.page.evaluate(() => {
      const footer = document.getElementById('footer');
      if (footer) footer.style.display = 'none';
      const fixedban = document.getElementById('fixedban');
      if (fixedban) fixedban.style.display = 'none';
    });
  }

  async fillForm(data: { firstName: string; lastName: string; email: string; mobile: string; }) {
    await this.page.locator('#firstName').fill(data.firstName);
    await this.page.locator('#lastName').fill(data.lastName);
    await this.page.locator('#userEmail').fill(data.email);
    await this.page.evaluate(() => {
      document.querySelectorAll('iframe[id^="google_ads_iframe"]').forEach(el => el.remove());
    });
    await this.page.locator('label[for="gender-radio-1"]').click();
    await this.page.locator('#userNumber').fill(data.mobile);
  }

  async submit() {
    await this.page.getByRole('button', { name: /submit/i }).click();
  }
}