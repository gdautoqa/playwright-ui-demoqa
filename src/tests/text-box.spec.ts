import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/textBoxPage';

test.describe('Text Box', () => {
  test('Should fill and submit the text box form', async ({ page }) => {
    const textBox = new TextBoxPage(page);
    await textBox.navigate();
    await textBox.fillForm('John Doe', 'john@example.com', '123 Main St', '456 Elm St');
    await textBox.submitForm();
    expect(await page.locator('#output #name').textContent()).toContain('John Doe');
  });
});
