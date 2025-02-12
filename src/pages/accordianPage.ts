import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccordianPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/accordian');
  }

  async getSectionOneContent() {
    const contentLocator = this.page.locator('#section1Content');
    await contentLocator.waitFor({ state: 'visible', timeout: 5000 });
    return await contentLocator.textContent();
  }

  async expandSectionTwo() {
    await this.page.getByText('Where does it come from?').click();
  }

  async getSectionTwoContent() {
    const contentLocator = this.page.locator('#section2Content');
    await contentLocator.waitFor({ state: 'visible', timeout: 5000 });
    return await contentLocator.textContent();
  }

  async expandSectionThree() {
    await this.page.getByText('Why do we use it?').click();
  }

  async getSectionThreeContent() {
    const contentLocator = this.page.locator('#section3Content');
    await contentLocator.waitFor({ state: 'visible', timeout: 5000 });
    return await contentLocator.textContent();
  }
}
