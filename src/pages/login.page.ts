import { Page, expect } from "@playwright/test";
import Wrapper from "../base/Wrapper";
import ENV from "../utils/env";

export default class LoginPage extends Wrapper {
    constructor(public page: Page) {
        super(page);
    }

    public async gotoLoginPage(){
        await this.page.goto(ENV.BASE_URL + "login");
    }

    public async enterUserName(username: string) {
        const usernameInput = await this.page.getByPlaceholder('Login');
        await usernameInput.fill(username);
    }

    public async enterPassword(password: string) {
        const passwordInput = await this.page.locator('input[name="password"]');
        await passwordInput.fill(password);
        await this.page.screenshot({path: 'screenshots/enterLoginPassword.png'});
    }

    public async clickLoginButton() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    public async verifyLoginStatus(firstname: string) {
        await expect(this.page.getByText('Hi, ' + firstname)).toBeVisible();
    }
}