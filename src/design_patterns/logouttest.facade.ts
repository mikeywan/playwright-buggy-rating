import ProfilePage from "../pages/profile.page";

// logout test case
export default class LogoutTest{
    readonly pageObject: ProfilePage;
    constructor(profilePageObject: ProfilePage) {
        this.pageObject = profilePageObject;
    }

    async run(){
        await this.pageObject.logout();
        await this.pageObject.verifyLogoutStatus();
    }
}