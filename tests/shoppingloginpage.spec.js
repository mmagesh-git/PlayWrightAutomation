const {test, expect} = require('@playwright/test')

test ('shoppingloginpage', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    let title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("Let's Shop");
    // locators
    const register =  page.locator(".text-reset");
    const firstname =  page.locator("#firstName");
    const lastname =  page.locator("#lastName");
    const email =  page.locator("#userEmail");
    const phoneno = page.locator("#userMobile");
    const occupation = page.locator("[formcontrolname='occupation']");
    const gender = page.locator("[value='Male']");
    const password = page.locator("#userPassword");
    const confirmpassword = page.locator("#confirmPassword");
    const checkbox = page.locator("[type='checkbox']"); 
    const registerbutton = page.locator("#login"); 
    const loginbutton = page.locator("[tabindex='0']"); 
    const product1title = page.locator(".card h5")

    

   
    await register.click();
    await expect(page.locator(".login-title")).toContainText("Register");
    await firstname.fill("Magesh");
    await lastname.fill("Mugundhan");
    await email.fill("magesh5@gmail.com");
    await phoneno.fill("9876543210");
    await occupation.selectOption('Engineer');
    await gender.click();
    await password.fill("Test12345678");
    await confirmpassword.fill("Test12345678");
    await checkbox.click();
    await registerbutton.click();
    await expect(page.locator(".login-wrapper h1")).toContainText("Account Created Successfully");
    await loginbutton.click();
    await email.fill("magesh5@gmail.com");
    await password.fill("Test12345678");
    await registerbutton.click();
    console.log(await product1title.nth(0).textContent());
    await expect(product1title.nth(0)).toContainText("ADIDAS ORIGINAL");


        

}
)


