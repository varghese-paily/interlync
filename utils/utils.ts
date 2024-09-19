import { Page } from '@playwright/test'

export async function waitForSelectorWithMinTime(
  page: Page,
  selector,
  minWaitTime = 1000,
  timeout = 60000
) {
  const startTime = Date.now()
  await page.waitForLoadState('load')
  await page
    .waitForSelector(selector, { timeout: timeout })
    .then(async () => {
      const elapsedTime = Date.now() - startTime
      if (elapsedTime < minWaitTime) {
        await page.waitForTimeout(minWaitTime - elapsedTime)
      }
    })
    .catch(async () => {
      const elapsedTime = Date.now() - startTime
      if (elapsedTime < minWaitTime) {
        await page.waitForTimeout(minWaitTime - elapsedTime)
      }
    })
}

export function generateUniqueId() {
  return Date.now() + '-' + Math.random().toString(10).substr(2, 4)
}

export function getCurrentDateTime(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function getRandomNumberBetween(min: number, max: number): number {
  if (min > max) {
    throw new Error('Minimum value must be less than maximum value!');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}