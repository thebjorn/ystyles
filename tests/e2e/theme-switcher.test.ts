import { test, expect } from '@playwright/test';

test.describe('Theme Switcher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should change theme', async ({ page }) => {
    // Select theme dropdown
    const themeSelect = page.locator('select[aria-label="Select theme"]');
    
    // Change theme to rainbow
    await themeSelect.selectOption('rainbow');
    
    // Check if theme was applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'rainbow');
  });

  test('should change mode', async ({ page }) => {
    // Select mode dropdown
    const modeSelect = page.locator('select[aria-label="Select mode"]');
    
    // Change mode to dark
    await modeSelect.selectOption('dark');
    
    // Check if dark mode was applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-mode', 'dark');
  });

  test('should persist theme preference', async ({ page }) => {
    // Set theme
    const themeSelect = page.locator('select[aria-label="Select theme"]');
    await themeSelect.selectOption('rainbow');
    
    // Reload page
    await page.reload();
    
    // Check if theme persisted
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'rainbow');
  });
}); 