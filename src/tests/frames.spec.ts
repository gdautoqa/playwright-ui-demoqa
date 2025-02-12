import { test, expect } from '@playwright/test';
import { FramesPage } from '../pages/framesPage';

test.describe('Frames', () => {
  test('Should retrieve content from the frame', async ({ page }) => {
    const frames = new FramesPage(page);
    await frames.navigate();
    const title = await frames.getFrameTitle();
    expect(title).toBeTruthy();
  });
});
