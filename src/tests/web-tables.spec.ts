import { test, expect } from '@playwright/test';
import { WebTablesPage } from '../pages/webTablesPage';

test.describe('Web Tables', () => {
  test('Should add a new record to the table', async ({ page }) => {
    const webTables = new WebTablesPage(page);
    await webTables.navigate();
    await webTables.addNewRecord({
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      salary: 50000,
      department: 'IT',
    });
    await expect(page.locator('.rt-table')).toContainText('John', { timeout: 5000 });
  });
});
