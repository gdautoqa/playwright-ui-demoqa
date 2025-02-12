import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/alertsPage';

test.describe('Alerts', () => {
  test('Should trigger and accept an alert', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.navigate();
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('You clicked a button');
      await dialog.accept();
    });
    await alertsPage.triggerAlert();
  });
});
