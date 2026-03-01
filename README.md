# Automation_Tech_Tests_QA_Engineer
This is a basic automation test script using playwright.
Playwright - Version 1.58.2


Setup for playwright
#K6 Install
winget install k6 --source winget

#to check playwright version
npx playwright --version

#update k6
winget upgrade k6

#update playwright
npm install -D @playwright/test@latest
npx playwright install --with-deps

#To start Test
npx playwright test

#Open Playwright UI for ui test
npx playwright test --ui

#To check results and report
npx playwright show-report