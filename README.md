# Automation_Tech_Tests_QA_Engineer
This is a basic automation test script using playwright.

Setup for playwright.
#K6 Install => winget install k6 --source winget
#To check playwright version => npx playwright --version
#update k6 => winget upgrade k6
#update playwright => npm install -D @playwright/test@latest  OR  npx playwright install --with-deps

#To start Test => npx playwright test
#Open Playwright UI for ui test => npx playwright test --ui
#To check results and report => npx playwright show-report

#How to run tests
> Latest Test script is QA_v2_TechAssessment.spec.ts
> Run in terminal using either of the following options;
npx playwright test [***This will run all browsers for the test***]
npx playwright test --ui [***This will run is a playwright UI to monitor also the simulation flow***]
> Results can be seen by running npx playwright show-report  OR  Checking under playwright-report folder  OR  test-results folder.
> For Screen capture on failed test steps it can be located under test-results folder.