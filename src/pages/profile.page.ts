import { expect, Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

// profile page object
export default class ProfilePage extends Wrapper {
    constructor(public page: Page) {
        super(page);
    }

    public async gotoProfilePage() {
        await this.page.getByRole('link', { name: 'Profile' }).click();
    }

    public async gotoMainPage() {
        await this.page.getByRole('link', { name: 'Buggy Rating' }).click();
    }

    public async enterPassword(password: string) {
        const passwordInput = await this.page.getByLabel('Current Password');
        await passwordInput.fill(password);
        await this.page.screenshot({ path: 'screenshots/enterPassword.png' })
    }

    public async enterNewPassword(newPassword: string) {
        const passwordInput = await this.page.getByLabel('New Pasword');
        await passwordInput.fill(newPassword);
        await this.page.screenshot({ path: 'screenshots/enterNewPassword.png' })
    }

    public async confirmPassword(newPassword: string) {
        const confirmPasswordInput = await this.page.getByLabel('Confirm Password');
        await confirmPasswordInput.fill(newPassword);
    }

    public async clickSaveButton() {
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    public async verifyPasswordResetStatus() {
        await expect(this.page.getByText('The profile has been saved successful').first()).toBeVisible();
    }

    public async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }

    public async verifyLogoutStatus() {
        await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible();
    }
}