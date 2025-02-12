import { test, expect } from '@playwright/test';
import { DynamicPropertiesPage } from '../pages/dynamicPropertiesPage';

test.describe('Dynamic Properties', () => {
  test('Should wait for button to become enabled', async ({ page }) => {
    const dynamicProperties = new DynamicPropertiesPage(page);
    await dynamicProperties.navigate();
    await dynamicProperties.waitForButtonToBeEnabled();
    await expect(dynamicProperties.enableAfterButton).toBeEnabled({ timeout: 10000 });
  });
});
