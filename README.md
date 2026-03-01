# Automation_Tech_Tests_QA_Engineer

A simple automated testing project using **Playwright** to test web applications.

---

## What You Need Before Starting

### Step 1: Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download and install the latest LTS version
3. Open Command Prompt and verify installation:
   ```bash
   node --version
   ```

### Step 2: Install K6 (Optional - for performance testing)
```bash
winget install k6 --source winget
```

To update K6 later:
```bash
winget upgrade k6
```

---

## Getting Started (First Time Setup)

### Step 1: Open Command Prompt
Press `Win + R`, type `cmd`, and press Enter.

### Step 2: Go to Your Project Folder
```bash
cd path/to/Automation_Tech_Tests_QA_Engineer
```
**Example:**
```bash
cd C:\Users\User\Documents\GitHub\Automation_Tech_Tests_QA_Engineer
```

### Step 3: Install Playwright
```bash
npx playwright install
```

### Step 4: Install Test Dependencies
```bash
npm install -D @playwright/test@latest
```

### Step 5: Check If Playwright Is Ready
```bash
npx playwright --version
```
You should see a version number like `1.40.0` or higher.

---

## How to Run Your Tests

### Test File Location
- Main test file: `tests/QA_v2_TechAssessment.spec.ts`

### Option 1: Run All Tests (All Browsers)
```bash
npx playwright test
```
This runs your tests in Chrome, Firefox, and Edge.

### Option 2: Run Tests with UI (See What's Happening)
```bash
npx playwright test --ui
```
This opens a window where you can watch the test run step-by-step.

### Option 3: Run Tests on Specific Browser Only
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=edge
npx playwright test --project=webkit

```

### Option 4: Run One Specific Test
```bash
npx playwright test tests/QA_v2_TechAssessment.spec.ts
```

---

## Check Your Test Results

### View the Test Report (Easy & Visual)
```bash
npx playwright show-report
```
This opens an HTML report showing which tests passed/failed.

### Or Check These Folders
| Folder | What's Inside |
|--------|---------------|
| `playwright-report/` | Detailed test results |
| `test-results/` | Raw test output files |
| `test-results/Failure-screenshots/` | Screenshots of failed tests |

---

## Change Test Settings

### Edit Test Data
Open `userTest.env.ts` and change these values:
```typescript
export const WebUrl = 'https://viewpoint.glasslewis.com/WD/?siteId=DemoClient';
export const COUNTRY = 'Belgium';        // Change to test a different country
export const COMPANY = 'Activision Blizzard Inc';  // Change to test a different company
```

### Edit Playwright Settings
Open `playwright.config.ts` to adjust:
- How long tests wait before timing out
- Which browsers to use
- How many times to retry failed tests

---

## Folder Structure Explained

```
Automation_Tech_Tests_QA_Engineer/
│
├── tests/
│   └── QA_v2_TechAssessment.spec.ts    ← Your main test file
│
├── test-results/
│   └── Failure-screenshots/             ← Pictures of failed tests (auto-saved)
│
├── playwright-report/                   ← Test results reports (auto-created)
│
├── userTest.env.ts                      ← Test data (country, company, URL)
│
├── playwright.config.ts                 ← Playwright settings
│
└── README.md                            ← This file
```

---

## Common Problems & Solutions

| Problem | Solution |
|---------|----------|
| **"Cannot find module '../env'"** | Make sure `userTest.env.ts` exists in the project root folder |
| **"Playwright not found"** | Run: `npx playwright install --with-deps` |
| **No screenshots from failed tests** | Check the `test-results/Failure-screenshots/` folder |
| **Tests run too fast/slow** | Edit `userTest.env.ts` and change the wait time values |

---

## Quick Command Reference

| What You Want | Command |
|---------------|---------|
| Install everything | `npx playwright install` |
| Run all tests | `npx playwright test` |
| Run tests with UI | `npx playwright test --ui` |
| See test results | `npx playwright show-report` |
| Check Playwright version | `npx playwright --version` |
| Update Playwright | `npm install -D @playwright/test@latest` |

---

## Key Features

✅ **Automated Testing** – Tests run without manual clicks  
✅ **Multiple Browsers** – Tests run on Chrome, Firefox, and Edge  
✅ **Screenshots on Failure** – Auto-saves pictures when tests fail  
✅ **Easy to Understand** – Test data is parameterized (easy to change)  
✅ **Visual Reports** – Beautiful HTML reports show what happened  

---

## Need Help?

- Check if Node.js is installed: `node --version`
- Check if Playwright is installed: `npx playwright --version`
- Re-install Playwright: `npx playwright install --with-deps`

---


---

## Notes
- Screenshots are automatically captured on test failure.
- All test execution timings and wait times are configurable.
- Test data (country, company, URL) is parameterized for easy reuse.

---
