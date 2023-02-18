import PopularMakePage from "../pages/popularmake.page";
import getComment from "../utils/getComment";

let comment = getComment();

export default class PostCommentTest{
    readonly pageObject: PopularMakePage;
    constructor(popularMakePageObject: PopularMakePage) {
        this.pageObject = popularMakePageObject;
    }

    async run(){
        await this.pageObject.gotoMainPage();
        await this.pageObject.navigateToPopularMake();
        await this.pageObject.navigateToFirstModel();
        await this.pageObject.postComment(comment);
        await this.pageObject.verifyPostStatus();
    }
}