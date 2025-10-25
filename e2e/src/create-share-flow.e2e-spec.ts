
import { Page } from 'puppeteer';
import { setupSuite } from './utils/tests.utils';

describe('Create and Share flow', () => {
  let page: Page;

  const newTestPageCallback = (p: Page) => {
    page = p;
  };

  setupSuite(newTestPageCallback, beforeAll, afterAll, beforeEach, afterEach);

  it('should log in, create a project, add an element, and share it', async () => {
    await page.goto('http://localhost:4201/', { waitUntil: 'networkidle2' });

    // Click the Sign In button to trigger the Google login popup
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('button:has-text("Sign in with Google")').click(),
    ]);

    // Enter email
    await popup.locator('input[type="email"]').fill('prototest44@gmail.com');
    await popup.locator('button:has-text("Next")').click();

    // Enter password
    await popup.wait_for_selector('input[type="password"]', { timeout: 60000 });
    await popup.locator('input[type="password"]').fill('testing123!');
    await popup.locator('button:has-text("Next")').click();

    // Wait for navigation back to the app's dashboard
    await page.waitForSelector('button:has-text("Create New")', { timeout: 90000 });

    // Create a new project
    await page.locator('button:has-text("Create New")').click();

    // Wait for the design surface to load
    await page.waitForSelector('div.content-wrapper', { timeout: 60000 });

    // Add a generic element to the board
    await page.drag_and_drop('div[data-component-name="Generic element"]', 'div.content-wrapper');

    // Click the share button
    const shareButton = page.locator('button:has-text("Share")');
    await shareButton.waitFor({ state: 'visible', timeout: 60000 });
    await shareButton.click();

    // Wait for the share dialog to appear
    await page.waitForSelector('app-share-dialog', { timeout: 60000 });
  });
});
