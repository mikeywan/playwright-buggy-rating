import { expect, Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";
import ENV from "../utils/env";

// register page object
export default class RegisterPage extends Wrapper {
    constructor(public page: Page) {
        super(page);
    }

    public async gotoRegisterPage(){
        await this.page.goto(ENV.BASE_URL + "register");
    }

    public async enterUserName(username: string) {
        const usernameInput = await this.page.getByLabel('Login');
        console.log('username: ' + username);
        await usernameInput.fill(username);
    }

    public async enterFirstName(firstname: string) {
        const firstnameInput = await this.page.getByLabel('First Name');
        await firstnameInput.fill(firstname);
    }
    public async enterLastName(lastname: string) {
        const lastnameInput = await this.page.getByLabel('Last Name');
        await lastnameInput.fill(lastname);
    }
    public async enterPassword(password: string) {
        const passwordInput = await this.page.getByLabel('Password', {exact: true});
        await passwordInput.fill(password);
        await this.page.screenshot({path: 'screenshots/enterPassword.png'})
    }

    public async confirmPassword(password: string) {
        const confirmPasswordInput = await this.page.getByLabel('Confirm Password');
        await confirmPasswordInput.fill(password);
    }

    public async clickRegisterButton() {
        await this.page.getByRole('button', { name: 'Register' }).click()
    }

    public async verifyRegisterStatus() {
        await expect(this.page.getByText('Registration is successful')).toBeVisible();
    }
}