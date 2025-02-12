import { test, expect } from '@playwright/test';
import { ProgressBarPage } from '../pages/progressBarPage';

test.describe('Progress Bar', () => {
  test('Should start and complete the progress', async ({ page }) => {
    const progressBar = new ProgressBarPage(page);
    await progressBar.navigate();
    await progressBar.startProgress();
    await progressBar.waitForProgressToComplete();
    expect(await progressBar.progressBar.isVisible()).toBeTruthy();
  });
});
