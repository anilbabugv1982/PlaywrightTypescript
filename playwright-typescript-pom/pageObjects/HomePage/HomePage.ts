import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./HomePageLocators";
import { testData } from "../../tests/testData";

export class HomePage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }



    async clickOnElementsLink() {
        await this.page.locator(locators.elements).click();
    }

    async goTo() {
        await this.page.goto(testData.environment);
        await this.page.waitForLoadState("domcontentloaded");
      }


  
}
