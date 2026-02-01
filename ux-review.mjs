import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:3000';
const DIR = '/tmp/ux-screenshots';
mkdirSync(DIR, { recursive: true });

async function capturePages(browser) {
  // Desktop viewport
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  // Mobile viewport
  const mobile = await browser.newContext({ viewport: { width: 375, height: 812 } });

  const pages = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/services', name: 'services' },
    { path: '/contact', name: 'contact' },
    { path: '/diagnostic', name: 'diagnostic-landing' },
    { path: '/diagnostic/start', name: 'diagnostic-start' },
  ];

  // Desktop screenshots
  for (const p of pages) {
    const page = await desktop.newPage();
    await page.goto(`${BASE}${p.path}`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${DIR}/${p.name}-desktop.png`, fullPage: true });
    await page.close();
  }

  // Mobile screenshots
  for (const p of pages) {
    const page = await mobile.newPage();
    await page.goto(`${BASE}${p.path}`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${DIR}/${p.name}-mobile.png`, fullPage: true });
    await page.close();
  }

  // Contact form states
  const contactPage = await desktop.newPage();
  await contactPage.goto(`${BASE}/contact`);
  await contactPage.waitForLoadState('networkidle');
  await contactPage.locator('#contact-form').scrollIntoViewIfNeeded();
  await contactPage.waitForTimeout(300);
  await contactPage.screenshot({ path: `${DIR}/contact-form-empty-desktop.png`, fullPage: false });

  // Fill and submit contact form to see success state
  await contactPage.locator('form input[placeholder="Your name"]').fill('Jane Smith');
  await contactPage.locator('form input[placeholder="you@company.com"]').fill('jane@example.com');
  await contactPage.locator('form textarea').fill('Testing the contact form UX.');
  await contactPage.screenshot({ path: `${DIR}/contact-form-filled-desktop.png`, fullPage: false });
  await contactPage.locator('form button[type="submit"]').click();
  await contactPage.waitForTimeout(2000);
  await contactPage.screenshot({ path: `${DIR}/contact-form-success-desktop.png`, fullPage: false });
  await contactPage.close();

  // Diagnostic flow - capture key states
  const diagPage = await desktop.newPage();
  await diagPage.goto(`${BASE}/diagnostic/start`);
  await diagPage.waitForLoadState('networkidle');
  await diagPage.waitForTimeout(500);
  await diagPage.screenshot({ path: `${DIR}/diagnostic-step0-desktop.png`, fullPage: true });

  // Start assessment
  await diagPage.locator('text=Start the Assessment').click();
  await diagPage.waitForTimeout(500);
  await diagPage.screenshot({ path: `${DIR}/diagnostic-step1-desktop.png`, fullPage: true });

  // Answer first dimension partially
  const questions = diagPage.locator('.bg-white.rounded-xl.p-5');
  for (let q = 0; q < 3; q++) {
    await questions.nth(q).locator('button').nth(3).click();
  }
  await diagPage.screenshot({ path: `${DIR}/diagnostic-step1-partial-desktop.png`, fullPage: true });

  // Answer all and go through all dimensions
  for (let q = 3; q < 6; q++) {
    await questions.nth(q).locator('button').nth(3).click();
  }

  // Go through all 8 dimensions
  for (let dim = 1; dim <= 8; dim++) {
    if (dim > 1) {
      const qs = diagPage.locator('.bg-white.rounded-xl.p-5');
      const count = await qs.count();
      for (let q = 0; q < count; q++) {
        await qs.nth(q).locator('button').nth(3).click();
      }
    }
    if (dim < 8) {
      await diagPage.locator('button:has-text("Next Dimension")').click();
      await diagPage.waitForTimeout(400);
    }
  }

  // Click "Almost done" to get to contact
  await diagPage.locator('button:has-text("Almost done")').click();
  await diagPage.waitForTimeout(400);
  await diagPage.screenshot({ path: `${DIR}/diagnostic-step9-contact-desktop.png`, fullPage: true });

  // Fill contact and see results
  await diagPage.locator('input[placeholder="Full name"]').fill('Test Reviewer');
  await diagPage.locator('input[placeholder="you@company.com"]').fill('review@test.com');
  await diagPage.locator('input[placeholder="Company name"]').fill('Review Corp');
  await diagPage.locator('button:has-text("See My Results")').click();
  await diagPage.waitForTimeout(2000);
  await diagPage.screenshot({ path: `${DIR}/diagnostic-results-desktop.png`, fullPage: true });
  await diagPage.close();

  // Mobile diagnostic results
  const diagMobile = await mobile.newPage();
  await diagMobile.goto(`${BASE}/diagnostic/start`);
  await diagMobile.waitForLoadState('networkidle');
  await diagMobile.locator('text=Start the Assessment').click();
  await diagMobile.waitForTimeout(400);

  for (let dim = 1; dim <= 8; dim++) {
    const qs = diagMobile.locator('.bg-white.rounded-xl.p-5');
    const count = await qs.count();
    for (let q = 0; q < count; q++) {
      await qs.nth(q).locator('button').nth(2).click(); // Score 3 for variety
    }
    if (dim < 8) {
      await diagMobile.locator('button:has-text("Next Dimension")').click();
    } else {
      await diagMobile.locator('button:has-text("Almost done")').click();
    }
    await diagMobile.waitForTimeout(300);
  }

  await diagMobile.screenshot({ path: `${DIR}/diagnostic-step9-contact-mobile.png`, fullPage: true });
  await diagMobile.locator('input[placeholder="Full name"]').fill('Mobile User');
  await diagMobile.locator('input[placeholder="you@company.com"]').fill('m@test.com');
  await diagMobile.locator('button:has-text("See My Results")').click();
  await diagMobile.waitForTimeout(2000);
  await diagMobile.screenshot({ path: `${DIR}/diagnostic-results-mobile.png`, fullPage: true });
  await diagMobile.close();

  await desktop.close();
  await mobile.close();
}

async function main() {
  console.log('Capturing UX screenshots...');
  const browser = await chromium.launch({ headless: true });
  try {
    await capturePages(browser);
    console.log(`Screenshots saved to ${DIR}`);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await browser.close();
  }
}

main();
