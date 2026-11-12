const {test, expect} = require ('@playwright/test')
test ('FirstTC', async ({page})=>
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
})

test.only ('TC2', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    // let title =  await page.title();
   // await expect(page).toHaveTitle("Rahul Shetty Academy | QA Automation, Playwright, AI Testing & Online Training");
    await page.locator("#username").fill("rahulshetty");
    await page.locator("#password").fill("learning");
    await page.locator("[type='submit']").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");    
}

)