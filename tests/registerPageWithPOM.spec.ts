import { test, expect } from '@playwright/test'
import { RegisterPage } from '../page-objects/registerPage'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/auth/register')
})

test.describe('Registration Page Tests with Page Object Model', () => {
    
    test('should successfully register user and navigate to homepage using POM', async ({ page }) => {
        const registerPage = new RegisterPage(page)
        
        await registerPage.registerUser(
            'John Doe',
            'john.doe@example.com', 
            'SecurePassword123!',
            'SecurePassword123!',
            true // accept terms
        )
        
        // Verify success message appears
        const successMessage = page.locator('.alert-success, .success, [class*="success"], .toast-success')
            .or(page.locator('text=/success|registered|welcome/i'))
        await expect(successMessage.first()).toBeVisible()
        
        // Verify successful registration and navigation to dashboard
        await expect(page).toHaveURL('http://localhost:4200/pages/iot-dashboard')
    })

})