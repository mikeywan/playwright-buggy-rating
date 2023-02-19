import { test, chromium, Browser, type Page } from '@playwright/test';
import RegisterPage from '../pages/register.page';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';
import PopularMakePage from '../pages/popularmake.page';
import LoginTest from '../design_patterns/logintest.facade';
import RegisterTest from '../design_patterns/registertest.facade';
import LogoutTest from '../design_patterns/logouttest.facade';
import PostCommentTest from '../design_patterns/postcommenttest.facade';
import ResetPasswordTest from '../design_patterns/resetpassword.facade';

let browser: Browser;
let page: Page;
let registerPage: RegisterPage;
let loginPage: LoginPage;
let profilePage: ProfilePage;
let popularMakePage: PopularMakePage;

let loginTest: LoginTest;
let registerTest: RegisterTest;
let logoutTest: LogoutTest;
let postCommentTest: PostCommentTest;
let resetPasswordTest: ResetPasswordTest;

// initialization of page objects and test variables
test.beforeAll(async () => {
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();

    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    profilePage = new ProfilePage(page);
    popularMakePage = new PopularMakePage(page);

    loginTest = new LoginTest(loginPage);
    registerTest = new RegisterTest(registerPage);
    logoutTest = new LogoutTest(profilePage);
    postCommentTest = new PostCommentTest(popularMakePage);
    resetPasswordTest = new ResetPasswordTest(profilePage);
});

// test cases group
test.describe('Buggy Rating Testing', () => {
    test.beforeEach(async () => {
    });

    test('should register a new user @sanity @regression', async () => {
        await registerTest.run();
    });

    test('should login buggy rating system @sanity @regression', async () => {
        await loginTest.run();
    });

    test('should post a comment to the popular make @regression', async () => {
        await postCommentTest.run();
    });

    test('should successfully change the password @regression', async () => {
        await resetPasswordTest.run();
    });

    test('should successfully logout buggy rating system @sanity @regression', async () => {
        await logoutTest.run();
    });

    test.afterEach(async () => {
    });
});

test.afterAll(async () => {
    await page.close();
    await browser.close();
});
