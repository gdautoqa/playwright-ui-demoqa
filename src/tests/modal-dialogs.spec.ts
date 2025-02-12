import { test, expect } from '@playwright/test';
import { ModalDialogsPage } from '../pages/modalDialogsPage';

test.describe('Modal Dialogs', () => {
  test('Should open and close the small and large modals', async ({ page }) => {
    const modalDialogs = new ModalDialogsPage(page);
    await modalDialogs.navigate();

    await modalDialogs.openSmallModal();
    await expect(modalDialogs.smallModalTitle).toContainText('Small Modal');
    await expect(modalDialogs.smallModalContent).toContainText('This is a small modal. It has very less content');
    await modalDialogs.closeSmallModal();

    await modalDialogs.openLargeModal();
    await expect(modalDialogs.largeModalTitle).toContainText('Large Modal');
    await expect(modalDialogs.largeModalContent).toContainText('Lorem Ipsum is simply dummy text');
    await modalDialogs.closeLargeModal();
  });
});
