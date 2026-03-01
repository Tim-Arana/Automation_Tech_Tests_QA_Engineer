import { test, expect } from '@playwright/test';
import { COUNTRY } from '../userTest.env';
import { COMPANY } from '../userTest.env';
import fs from 'fs';

//Screenshot on failure – one capture per test, Saves in test-results/Failure-screenshots folder
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const name = testInfo.title.replace(/\s+/g, '_');
    const filePath = `test-results/Failure-screenshots/${name}.png`;

    // take a single screenshot…
    const screenshot = await page.screenshot();
    // …write it to disk (optional)…
    await fs.promises.mkdir('test-results/Failure-screenshots', { recursive: true });
    await fs.promises.writeFile(filePath, screenshot);
    // …and attach it to the test record
    await testInfo.attach('screenshot', {
      body: screenshot,
      contentType: 'image/png'
    });
  }
});

/*1. 
Given the user is on the landing page for the WD site
And the Country filter is available
When the user selects “Belgium” from the Country filter list on the left panel
And click on Update button for the country filter list
Then the grid displays all meetings that are associated with the country “Belgium” on the page*/
test('1_QA_Tech', async ({ page }) => {
/*Given the user is on the landing page for the WD site*/
  await page.goto('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient');
  // wait 3 seconds for grid to update
  await page.waitForTimeout(3000);
/*And the Country filter is available*/
  // Check Country Filter is available and ready
  const countryFilter = page.getByLabel('Country Filter');
  await expect(countryFilter).toBeVisible();
  await expect(countryFilter.getByRole('button', { name: 'Update' })).toBeEnabled();
  await expect(countryFilter.getByRole('checkbox', { name: COUNTRY })).toBeVisible();
/*When the user selects “Belgium” from the Country filter list on the left panel*/
  const belgiumCheckbox = countryFilter.getByRole('checkbox', { name: COUNTRY });
  await expect(belgiumCheckbox).toBeVisible();
  // hover over the checkbox before interacting
  await belgiumCheckbox.hover();
/*And click on Update button for the country filter list*/
  await belgiumCheckbox.click();
/*Then the grid displays all meetings that are associated with the country “Belgium” on the page*/
  await page.getByLabel('Country Filter').getByRole('button', { name: 'Update' }).click();
  // wait 3 seconds for grid to update
  await page.waitForTimeout(3000);
  //Expect to see Target Country in Data Table
  const belgiumCells = page.getByRole('gridcell', { name: COUNTRY });
  const count = await belgiumCells.count();
  expect(count).toBeGreaterThan(0);
});


/*2. 
Given the user is on the landing page for the WD site
When the user searches for the company “Activision Blizzard Inc” in the top right search bar
And the user clicks on the Company Name hyperlink from the search results
Then the user lands on the vote card page containing the vote table
And “Activision Blizzard Inc” should appear in the top banner.*/
test('2_QA_Tech', async ({ page }) => {
/*Given the user is on the landing page for the WD site*/
  await page.goto('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient');
  // wait 3 seconds for grid to update
  await page.waitForTimeout(3000);
/*When the user searches for the company “Activision Blizzard Inc” in the top right search bar*/
  await expect(page.getByRole('combobox', { name: 'Search for a company' })).toBeVisible();
/*And the user clicks on the Company Name hyperlink from the search results*/
  await page.getByRole('combobox', { name: 'Search for a company' }).click();
/*Then the user lands on the vote card page containing the vote table*/
  await page.getByRole('combobox', { name: 'Search for a company' }).fill(COMPANY);
/*And “Activision Blizzard Inc” should appear in the top banner.*/
  await page.getByRole('option', { name: `${COMPANY} -` }).click();
  // wait 3 seconds for grid to update
  await page.waitForTimeout(3000);
  await expect(page.locator('#detail-issuer-name')).toMatchAriaSnapshot(`- heading "${COMPANY}" [level=2]`);
});