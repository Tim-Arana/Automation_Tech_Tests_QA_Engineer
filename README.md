# Automation_Tech_Tests_QA_Engineer
This is a basic automation test script using playwright.
Playwright - Version 1.58.2



//Grafana Install
winget install k6 --source winget

//update k6
winget upgrade k6

//Playwright UI
npx playwright test --ui

//update playwright
npm install -D @playwright/test@latest
npx playwright install --with-deps

//To start Test
npx playwright test

//to check playwright version
npx playwright --version

//Open Playwright UI
npx playwright test --ui



//To check results and report
npx playwright show-report