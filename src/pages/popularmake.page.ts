import { expect, Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

// popular make page object
export default class PopularMakePage extends Wrapper {
    constructor(public page: Page) {
        super(page);
    }

    public async gotoMainPage() {
        await this.page.getByRole('link', { name: 'Buggy Rating' }).click();
    }

    public async navigateToPopularMake() {
        await this.page.getByRole('link', { name: 'Alfa Romeo' }).click();
    }

    public async navigateToFirstModel() {
        await this.page.getByRole('link', { name: 'View more' }).first().click();
    }

    public async postComment(comment: string) {
        await this.page.getByLabel('Your Comment (optional)').fill(comment);
        await this.page.getByRole('button', { name: 'Vote!' }).click();
    }

    public async clickSaveButton() {
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    public async verifyPostStatus() {
        await expect(this.page.getByText('Thank you for your vote!')).toBeVisible();
    }
}