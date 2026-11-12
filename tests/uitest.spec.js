const {test, expect} = require ('@playwright/test');
test ('FirstTC', async ({page})=>
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
})

test.only ('TC2', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username");
    const submit = page.locator("[type='submit']");
    const productTitle = page.locator(".card-body a");
    console.log(await page.title());
    // let title =  await page.title();
   // await expect(page).toHaveTitle("Rahul Shetty Academy | QA Automation, Playwright, AI Testing & Online Training");
    await userName.fill("rahulshetty");
    await page.locator("#password").fill("Learning@830$3mK2");
    await submit.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");   
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await submit.click();
    await expect(page).toHaveTitle("ProtoCommerce");
    console.log(await productTitle.nth("2").textContent());
    console.log(await productTitle.first().textContent());
    console.log(await productTitle.allTextContents());
    
}
)