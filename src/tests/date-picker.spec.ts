import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../pages/datePickerPage';

test.describe('Date Picker', () => {
  test('Should select a date', async ({ page }) => {
    const datePicker = new DatePickerPage(page);
    await datePicker.navigate();
    await datePicker.selectDate('03/15/2023');
    expect(await datePicker.dateInput.inputValue()).toBe('03/15/2023');
  });
});
