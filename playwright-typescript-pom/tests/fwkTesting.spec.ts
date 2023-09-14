import test, { expect } from "../base_fwk/fixtures/baseTest"
import { testData } from "./testData";
import { HomePage } from "../pageObjects/HomePage/HomePage";


test.describe('two tests', () => {
  console.log("in describe from spec file");
  test("first playwright test12", async ({ page, context, browser, homePage,webtablePage,elementsPage }) => {
    console.log("test start")
    await homePage.goTo();
    console.log("test ends")
    await homePage.clickOnElementsLink();
    await elementsPage.clickOnWebTable();
    await webtablePage.fillTableDetails();
  

 
  });

});

