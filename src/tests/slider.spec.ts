import { test, expect } from '@playwright/test';
import { SliderPage } from '../pages/sliderPage';

test.describe('Slider', () => {
  test('Should set the slider value', async ({ page }) => {
    const slider = new SliderPage(page);
    await slider.navigate();
    await slider.setSliderValue(50);
    const value = await slider.getSliderValue();
    expect(value).toBe('50');
  });
});
