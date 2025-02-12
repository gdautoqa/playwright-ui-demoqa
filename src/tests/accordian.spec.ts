import { test, expect } from '@playwright/test';
import { AccordianPage } from '../pages/accordianPage';

test.describe('Accordian', () => {
  test('Should expand sections and verify content', async ({ page }) => {
    const accordian = new AccordianPage(page);
    await accordian.navigate();

    const sectionOneContent = await accordian.getSectionOneContent();
    expect(sectionOneContent).toContain(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    );

    await accordian.expandSectionTwo();
    const sectionTwoContent = await accordian.getSectionTwoContent();
    expect(sectionTwoContent).toContain(
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
    );

    await accordian.expandSectionThree();
    const sectionThreeContent = await accordian.getSectionThreeContent();
    expect(sectionThreeContent).toContain(
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    );
  });
});
