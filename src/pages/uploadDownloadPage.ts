import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class UploadDownloadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/upload-download');
  }

  async uploadFile(filePath: string) {
    await this.page.setInputFiles('input[type="file"]', filePath);
  }

  async downloadFile() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator('#downloadButton').click()
    ]);
    return download;
  }
}
