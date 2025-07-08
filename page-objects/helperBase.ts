import { Page } from "@playwright/test";

export class HelperBase {
    readonly page: Page;
    constructor (page: Page) {
        this.page = page
        //this.baseUrl = "http://localhost:4200/"
    }
    async waitForNumberOfSeconds (timeInSecond: number) {
        await this.page.waitForTimeout (timeInSecond * 1000)
    }
}