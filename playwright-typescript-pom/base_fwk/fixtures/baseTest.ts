import { ElementsPage } from "../../pageObjects/ElementsPage/ElementsPage"
import { HomePage } from '../../pageObjects/HomePage/HomePage';
import { WebTablePage } from '../../pageObjects/WebTablePage/WebTablePage';
import { Page, test as baseTest } from "@playwright/test";
import { CommonScenario } from "../common/CommonScenario";
import { CommonPage } from "../common/CommonPage";

// declaring the objects type for autocompletion 
interface PageObjects {
    elementsPage: ElementsPage;
    homePage: HomePage;
    webtablePage: WebTablePage;
    commonScenarioPage: CommonScenario;
    commonPage: CommonPage,
}
// intializing all the page objects you have in your app
// and import them as fixture in spec file
const test = baseTest.extend<PageObjects>({
    commonScenarioPage: async ({ page }, use, testinfo) => {
        await use(new CommonScenario(page, testinfo));
    },
    elementsPage: async ({ page, commonScenarioPage }, use) => {
        await use(new ElementsPage(page, commonScenarioPage));
    },
    homePage: async ({ page, commonScenarioPage }, use) => {
        await use(new HomePage(page, commonScenarioPage));
    },
    webtablePage: async ({ page, commonScenarioPage }, use) => {
        await use(new WebTablePage(page, commonScenarioPage));
    },

});

test.beforeEach(async ({ browser }) => {
   // console.log('beforeEach tests');
});

test.afterEach(async ({ }) => {
   // console.log('afterEach tests');
});

// export default and name export so spec files can use it 
export default test;
export const expect = test.expect;
