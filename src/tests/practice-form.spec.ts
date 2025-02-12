import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceFormPage';

test.describe('Practice Form', () => {
  test('Should fill and submit the practice form', async ({ page }) => {
    const practiceForm = new PracticeFormPage(page);
    await practiceForm.navigate();
    await practiceForm.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      mobile: '1234567890'
    });
    await practiceForm.submit();
    await expect(page.locator('#example-modal-sizes-title-lg')).toBeVisible({ timeout: 10000 });
  });
});
