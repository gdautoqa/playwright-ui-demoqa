import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicPropertiesPage extends BasePage {
  readonly enableAfterButton: Locator;

  constructor(page: Page) {
    super(page);
    this.enableAfterButton = page.getByRole('button', { name: /will enable 5 seconds/i });
  }

  async navigate() {
    await super.navigate('/dynamic-properties');
  }

  async waitForButtonToBeEnabled() {
    const buttonHandle = await this.enableAfterButton.elementHandle();
    if (!buttonHandle) {
      throw new Error('Enable-after button not found');
    }
    await this.page.waitForFunction(
      (button) => !(button as HTMLButtonElement).disabled,
      buttonHandle,
      { timeout: 10000 }
    );
  }
}
