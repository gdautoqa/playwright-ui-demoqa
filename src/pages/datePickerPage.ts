import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DatePickerPage extends BasePage {
  readonly dateInput: Locator;

  constructor(page: Page) {
    super(page);
    this.dateInput = this.page.locator('#datePickerMonthYearInput');
  }

  async navigate() {
    await super.navigate('/date-picker');
  }

  async selectDate(date: string) {
    await this.dateInput.fill(date);
  }
}
