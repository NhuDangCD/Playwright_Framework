import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/auth/register')
})

test.describe('Registration Page Tests', () => {
    
    test('should successfully register user and navigate to homepage', async ({ page }) => {
        const fullNameField = page.getByLabel('Full Name').or(page.getByPlaceholder('Full Name'))
        const emailField = page.getByLabel('Email').or(page.getByPlaceholder('Email'))  
        const passwordField = page.getByLabel('Password').or(page.getByPlaceholder('Password'))
        const confirmPasswordField = page.getByLabel('Confirm Password').or(page.getByPlaceholder('Confirm Password'))
        const registerButton = page.getByRole('button', { name: /register|sign up/i })

        await fullNameField.first().fill('John Doe')
        await emailField.first().fill('john.doe@example.com')
        await passwordField.first().fill('SecurePassword123!')
        
        if (await confirmPasswordField.first().isVisible()) {
            await confirmPasswordField.first().fill('SecurePassword123!')
        }

        // Handle terms checkbox if present
        const customCheckbox = page.locator('.custom-checkbox')
        if (await customCheckbox.isVisible()) {
            await customCheckbox.click()
        }

        await registerButton.first().click()
        
        // Verify success message appears
        const successMessage = page.locator('.alert-success, .success, [class*="success"], .toast-success')
            .or(page.locator('text=/success|registered|welcome/i'))
        await expect(successMessage.first()).toBeVisible()
        
        // Verify successful registration and navigation to dashboard
        await expect(page).toHaveURL('http://localhost:4200/pages/iot-dashboard')
    })

})