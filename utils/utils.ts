import { Page } from "@playwright/test";

export async function waitForSelectorWithMinTime(
    page: Page,
    selector,
    minWaitTime = 1000,
    timeout = 120000
  ) {
    const startTime = Date.now();
    await page.waitForLoadState("load");
    await page
      .waitForSelector(selector, { timeout: timeout })
      .then(async () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < minWaitTime) {
          await page.waitForTimeout(minWaitTime - elapsedTime);
        }
      })
      .catch(async () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < minWaitTime) {
          await page.waitForTimeout(minWaitTime - elapsedTime);
        }
      });
  }