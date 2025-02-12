import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SelectMenuPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/select-menu');
  }

  async completeSelectMenuActions() {
    await this.locator('#withOptGroup svg').click();
    await this.page.getByText('Group 2, option 1', { exact: true }).click();

    await this.locator('#selectOne svg').click();
    await this.page.getByText('Mr.', { exact: true }).click();

    await this.locator('#oldSelectMenu').selectOption('1');

    await this.locator('#selectMenuContainer path').nth(2).click();
    await this.locator('#selectMenuContainer svg').nth(2).click();
    await this.locator('#react-select-4-option-2').click();
    await this.locator('#react-select-4-option-3').click();

    await this.locator('#cars').selectOption('audi');
  }
}
