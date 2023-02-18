import LoginPage from "../pages/login.page";
import ENV from "../utils/env";
import getUsername from "../utils/getUsername";

let username = getUsername();
let firstname = ENV.FIRSTNAME;
let password = ENV.PASSWORD;

export default class LoginTest{
    readonly pageObject: LoginPage;
    constructor(loginPageObject: LoginPage) {
        this.pageObject = loginPageObject;
    }

    async run(){
        await this.pageObject.gotoLoginPage();
        await this.pageObject.enterUserName(username);
        await this.pageObject.enterPassword(password);
        await this.pageObject.clickLoginButton();
        await this.pageObject.verifyLoginStatus(firstname);
    }
}