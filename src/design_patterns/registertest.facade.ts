import RegisterPage from "../pages/register.page";
import ENV from "../utils/env";
import getUsername from "../utils/getUsername";

let username = getUsername();
let firstname = ENV.FIRSTNAME;
let lastname = ENV.LASTNAME;
let password = ENV.PASSWORD;

export default class RegisterTest{
    readonly pageObject: RegisterPage;
    constructor(registerPageObject: RegisterPage) {
        this.pageObject = registerPageObject;
    }

    async run(){
        await this.pageObject.gotoRegisterPage();
        await this.pageObject.enterUserName(username);
        await this.pageObject.enterFirstName(firstname);
        await this.pageObject.enterLastName(lastname);
        await this.pageObject.enterPassword(password);
        await this.pageObject.confirmPassword(password);
        await this.pageObject.clickRegisterButton();
        await this.pageObject.verifyRegisterStatus();
    }
}