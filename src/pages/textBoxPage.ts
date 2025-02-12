import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TextBoxPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/text-box');
  }

  async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await this.page.locator('#userName').fill(fullName);
    await this.page.locator('#userEmail').fill(email);
    await this.page.locator('#currentAddress').fill(currentAddress);
    await this.page.locator('#permanentAddress').fill(permanentAddress);
  }

  async submitForm() {
    await this.page.getByRole('button', { name: /submit/i }).click();
  }
}