import { test, expect, Page } from '@playwright/test';
import { WebUrl, COUNTRY, COMPANY , THINKTIME } from '../userTest.env';
import fs from 'fs';

/*1. 
Given the user is on the landing page for the WD site
And the Country filter is available
When the user selects “Belgium” from the Country filter list on the left panel
And click on Update button for the country filter list
Then the grid displays all meetings that are associated with the country “Belgium” on the page*/
async function applyCountryFilter(page: Page, country: string) {

  await page.waitForTimeout(THINKTIME); 
  const filter = page.getByLabel('Country Filter'); // And the Country filter is available
  await expect(filter).toBeVisible();
  await page.waitForTimeout(THINKTIME);
  const checkbox = filter.getByRole('checkbox', { name: country }); // When the user selects “Belgium” from the Country filter list on the left panel
  await expect(checkbox).toBeVisible();
  await page.waitForTimeout(THINKTIME);
  await checkbox.click(); // click the checkbox to select the country
  await filter.getByRole('button', { name: 'Update' }).click();  // And click on Update button for the country filter list

  // Then the grid displays all meetings that are associated with the country “Belgium” on the page
  // wait until at least one grid cell for the chosen country appears
  await page.waitForSelector(`role=gridcell[name="${country}"]`);
  await page.waitForTimeout(THINKTIME);

}

/*2. 
Given the user is on the landing page for the WD site
When the user searches for the company “Activision Blizzard Inc” in the top right search bar
And the user clicks on the Company Name hyperlink from the search results
Then the user lands on the vote card page containing the vote table
And “Activision Blizzard Inc” should appear in the top banner.*/
async function searchForCompany(page: Page, company: string) {

  await page.waitForTimeout(THINKTIME);
  const searchBox = page.getByRole('combobox', { name: 'Search for a company' }); // When the user searches for the company “Activision Blizzard Inc” in the top right search bar
  await expect(searchBox).toBeVisible();
  await searchBox.fill(company);
  await page.waitForTimeout(THINKTIME);
  await page.getByRole('option', { name: `${company} -` }).click(); // And the user clicks on the Company Name hyperlink from the search results
  await page.waitForTimeout(THINKTIME);
  await expect(page.locator('#detail-issuer-name')).toHaveText(company); // And “Activision Blizzard Inc” should appear in the top banner.

}

// screenshot hook – one capture per failing test, attached to the result
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const name = testInfo.title.replace(/\s+/g, '_');
    const filePath = `test-results/Failure-screenshots/${name}.png`;
    const screenshot = await page.screenshot();
    await fs.promises.mkdir('test-results/Failure-screenshots', { recursive: true });
    await fs.promises.writeFile(filePath, screenshot);
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  }
});

test('1_QA_Tech - filter by country', async ({ page }) => {

  await page.goto(WebUrl); // Given the user is on the landing page for the WD site
  await applyCountryFilter(page, COUNTRY);

  // verify that the grid really contains at least one row for the country
  const cells = page.getByRole('gridcell', { name: COUNTRY });
  const count = await cells.count();
  expect(count).toBeGreaterThan(0);

});

test('2_QA_Tech - search and navigate to company', async ({ page }) => {

  await page.goto(WebUrl); // Given the user is on the landing page for the WD site
  await searchForCompany(page, COMPANY);

});