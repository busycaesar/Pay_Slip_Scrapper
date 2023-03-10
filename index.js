// Header File.
const puppeteer = require("puppeteer");

(async () => {
  // This opens the browser.
  const browser = await puppeteer.launch();

  // This opens a new page.
  const page = await browser.newPage();

  // This navigates to the URL.
  await page.goto("Website URL");

  // This make sures that the login is loaded before moving further.
  await page.waitForSelector("#PayRollNum");

  // This enters the login credentials.
  await page.type("#PayRollNum", "Employee Id");
  await page.type("#UserName", "Username");
  await page.type("#Password", "Password");

  // This clicks the login button.
  await page.click("#btnLogin");

  // This waits for the page to load.
  await page.waitForNavigation();

  // This clicks the pay stubs button.
  await page.click("#NetPay");

  // This make sures that all the elements are loaded before moving further.
  await page.waitForSelector("#Earnings1");
  await page.waitForSelector("#Deductions1");
  await page.waitForSelector("#Additional1");

  // This downloads the pdf copy of the pay slip.
  await page.pdf({
    path: "Payslip_Month_Year.pdf",
    format: "A4",
    pageRanges: "1-1",
  });

  // This finally closes the browser.
  await browser.close();
})();
