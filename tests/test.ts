import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading')).toBeVisible();
});

test('index page has sum', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: '3' })).toBeVisible();
});
