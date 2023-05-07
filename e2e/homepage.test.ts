import { expect, test } from '@playwright/test';

test('Home page has navbar', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Andrew Joel')).toBeVisible();
});
