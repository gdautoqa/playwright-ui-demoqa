import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SliderPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/slider');
  }

  async setSliderValue(value: number) {
    await this.page.getByRole('slider').fill(value.toString());
  }

  async getSliderValue() {
    return await this.page.getByRole('slider').getAttribute('value');
  }
}