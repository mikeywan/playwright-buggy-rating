import ProfilePage from "../pages/profile.page";
import ENV from "../utils/env";

let password = ENV.PASSWORD;
let newPassword = ENV.NEW_PASSWORD;

export default class ResetPasswordTest {
    readonly pageObject: ProfilePage;
    constructor(profilePageObject: ProfilePage) {
        this.pageObject = profilePageObject;
    }

    async run() {
        await this.pageObject.gotoProfilePage();
        await this.pageObject.enterPassword(password);
        await this.pageObject.enterNewPassword(newPassword);
        await this.pageObject.confirmPassword(newPassword);
        await this.pageObject.clickSaveButton();
        await this.pageObject.verifyPasswordResetStatus();

        await this.pageObject.gotoMainPage();
        await this.pageObject.gotoProfilePage();
        await this.pageObject.enterPassword(newPassword);
        await this.pageObject.enterNewPassword(password);
        await this.pageObject.confirmPassword(password);
        await this.pageObject.clickSaveButton();
        await this.pageObject.verifyPasswordResetStatus();
    }
}