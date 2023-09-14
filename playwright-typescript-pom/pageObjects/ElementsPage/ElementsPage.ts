import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./ElementsPageLocators";
export class ElementsPage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async clickOnWebTable() {
        await this.page.locator(locators.webTableLink).click();
        await this.takeScreenshot("WebTable");
    };

}