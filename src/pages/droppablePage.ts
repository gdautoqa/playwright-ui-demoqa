import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DroppablePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await super.navigate('/droppable');
  }

  async drop() {
    await this.page.dragAndDrop('#draggable', '#droppable');
  }
}
