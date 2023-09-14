import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./WebTablePageLocators";

export class WebTablePage extends CommonPage {

    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }

    async fillTableDetails() {
        await this.page.locator(locators.addbutton).click();
        await this.page.locator(locators.firstname).type("fname");
        await this.page.locator(locators.lastname).type("lname");
        await this.page.locator(locators.email).type("test@email.com");
        await this.page.locator(locators.age).type("40");
        await this.page.locator(locators.salary).type("90000");
        await this.page.locator(locators.department).type("SE Engineer");
        await this.page.locator(locators.submitbutton).click();

     const allusers = await this.page.locator('//div[@class="rt-tr-group"]');
        const rowCount = await allusers.count();
       
        let data = [];
     for(let i=0; i<rowCount; i++){
            let row = allusers.nth(i);
            let companyName = await row.locator('div:nth-child(1)').allTextContents();
            let  prevClose = await row.locator('div:nth-child(3)').allInnerTexts();
            let  currentPrice = await row.locator('div:nth-child(4)').allInnerTexts();
            
           
           await companyName.forEach((text) => {
          if(text.length>40 && text!==null){
            console.log(text);
            console.log(text.length);
          }
            });

            if(companyName && prevClose && currentPrice){
                data.push({
                    companyName: companyName,
                    prevClose: prevClose,
                    currentPrice: currentPrice
                });
            }
        }

        await this.page.waitForTimeout(3000);

        console.log(data);

            ////div[@class='rt-tbody']

    

     
    }
    }




