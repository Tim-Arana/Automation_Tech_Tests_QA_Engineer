import { test, expect } from '@playwright/test';


/*1. 
Given the user is on the landing page for the WD site
And the Country filter is available
When the user selects “Belgium” from the Country filter list on the left panel
And click on Update button for the country filter list
Then the grid displays all meetings that are associated with the country “Belgium” on the page*/
test('1_QA_Tech', async ({ page }) => {

  /*Given the user is on the landing page for the WD site*/
  await page.goto('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient');

  /*And the Country filter is available*/
  
  //When the user selects “Belgium” from the Country filter list on the left panel
  await expect(page.getByRole('checkbox', { name: 'Belgium' })).toBeVisible();

  //And click on Update button for the country filter list
  await page.getByRole('checkbox', { name: 'Belgium' }).click();

  //Then the grid displays all meetings that are associated with the country “Belgium” on the page
  await page.getByLabel('Country Filter').getByRole('button', { name: 'Update' }).click();

  //Expect to see Target Country in Data Table
  await expect(page.getByRole('gridcell', { name: 'Belgium' }).first()).toBeVisible();
});


/*2. 
Given the user is on the landing page for the WD site
When the user searches for the company “Activision Blizzard Inc” in the top right search bar
And the user clicks on the Company Name hyperlink from the search results
Then the user lands on the vote card page containing the vote table
And “Activision Blizzard Inc” should appear in the top banner.*/
test('2_QA_Tech', async ({ page }) => {

  await page.goto('https://viewpoint.glasslewis.com/WD/?siteId=DemoClient');
  await page.getByRole('combobox', { name: 'Search for a company' }).click();
  await page.getByRole('combobox', { name: 'Search for a company' }).fill('Activision Blizzard Inc');
  await page.getByRole('option', { name: 'Activision Blizzard Inc -' }).click();
  await expect(page.locator('#detail-issuer-name')).toMatchAriaSnapshot(`- heading "Activision Blizzard Inc" [level=2]`);
});