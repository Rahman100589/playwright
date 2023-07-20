const {test} = require('@playwright/test');

test('First Playwright Test', async ({browser,page})=>
{
    await page.goto("https://orgec9a832c.crm8.dynamics.com/main.aspx?appid=b34f2a1a-6807-ee11-8f6e-6045bdadab7e&pagetype=control&controlName=MscrmControls.AcceleratedSales.AnchorShellControl");
    await page.locator('#i0116').type("learn@microsoftd365.onmicrosoft.com");
    await page.locator('#idSIButton9').click();
    //console.log(await page.locator("#usernameError").textContent());
    //await expect(page.locator("#usernameError")).toContentText("We couldn't find an account with that username.");
    await page.locator('#i0118').type("Welcome@2023");
    await page.locator('#idSIButton9').click();
    await page.locator('#idSIButton9').click(); 
    //await page.pause();   
    await page.getByText('Accounts').click();
    //await page.pause(); 
    await page.getByLabel('New', { exact: true }).click();
    //await page.getByText('Account Name').toContentText("Account Name");
    //await page.getByText('Account Type').toContentText("Account Type");
    //await page.pause();
}
);  