import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ButtonsPage extends BasePage {
  readonly doubleClickBtn: Locator;
  readonly rightClickBtn: Locator;
  readonly dynamicClickBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.doubleClickBtn = page.getByRole('button', { name: /double click me/i });
    this.rightClickBtn = page.getByRole('button', { name: /right click me/i });
    this.dynamicClickBtn = page.getByRole('button', { name: /click me/i }).last();
  }

  async navigate() {
    await super.navigate('/buttons');
  }

  async doubleClick() {
    await this.doubleClickBtn.dblclick();
  }

  async rightClick() {
    await this.rightClickBtn.click({ button: 'right' });
  }

  async clickDynamic() {
    await this.dynamicClickBtn.click();
  }
}
