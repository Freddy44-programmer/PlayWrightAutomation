const {test, expect} = require('@playwright/test');


test.only('Browser Context Playwright test', async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator('#username');
const signIn = page.locator("#signInBtn");
const cardTitles = page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//css
await userName.fill("shettyacademy");
await page.locator("[type='password']").fill("learning");
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect( page.locator("[style*='block']")).toContainText('Incorrect');
//type - fill
await userName.fill("");
await userName.fill("rahulshettyacademy");
await signIn.click();
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);

});


test('First Playwright test', async ({page})=>
    {
    await page.goto("https://google.com");
    //get title - assertion
   console.log(await page.title());
   await expect(page).toHaveTitle("Google")
   
    });