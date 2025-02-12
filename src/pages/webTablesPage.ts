import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WebTablesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/webtables');
  }

  async addNewRecord(record: { firstName: string; lastName: string; age: number; email: string; salary: number; department: string; }) {
    await this.page.getByRole('button', { name: /add/i }).click();
    await this.page.locator('#firstName').fill(record.firstName);
    await this.page.locator('#lastName').fill(record.lastName);
    await this.page.locator('#age').fill(record.age.toString());
    await this.page.locator('#userEmail').fill(record.email);
    await this.page.locator('#salary').fill(record.salary.toString());
    await this.page.locator('#department').fill(record.department);

    // Remove/hide the interfering fixed banner.
    await this.page.evaluate(() => {
      const fixedBanner = document.getElementById('fixedban');
      if (fixedBanner) {
        fixedBanner.style.display = 'none';
      }
    });

    // Now click the submit button.
    await this.page.getByRole('button', { name: /submit/i }).click();
  }
}
