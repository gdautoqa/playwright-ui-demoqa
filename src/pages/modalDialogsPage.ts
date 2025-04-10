import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ModalDialogsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/modal-dialogs');
  }

  async openSmallModal() {
    await this.page.evaluate(() => {
      document.querySelectorAll('iframe[id^="google_ads_iframe"]').forEach((el) => el.remove());
    });
    await this.page.getByRole('button', { name: 'Small modal' }).click();
  }

  get smallModalTitle() {
    return this.page.locator('#example-modal-sizes-title-sm');
  }

  get smallModalContent() {
    return this.page.getByLabel('Small Modal').getByRole('document');
  }

  async closeSmallModal() {
    await this.page.locator('#closeSmallModal').click();
  }

  async openLargeModal() {
    await this.page.getByRole('button', { name: 'Large modal' }).click();
  }

  get largeModalTitle() {
    return this.page.locator('#example-modal-sizes-title-lg');
  }

  get largeModalContent() {
    return this.page.getByRole('paragraph');
  }

  async closeLargeModal() {
    await this.page.locator('#closeLargeModal').click();
  }
}
