import { test, expect } from '@playwright/test';
import { NestedFramesPage } from '../pages/nestedFramesPage';

test.describe('Nested Frames', () => {
  test('Should retrieve text from within nested frames', async ({ page }) => {
    const nestedFrames = new NestedFramesPage(page);
    await nestedFrames.navigate();
    const text = await nestedFrames.getFrameText();
    expect(text).toContain('Child Iframe');
  });
});
