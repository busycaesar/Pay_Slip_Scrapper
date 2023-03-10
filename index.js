// Header File.
const puppeteer = require("puppeteer");

(async () => {
  // This opens the browser.
  const browser = await puppeteer.launch();

  // This opens a new page.
  const page = await browser.newPage();

  // This navigates to the URL.
  await page.goto("Web_Site_URL");

  // This make sures that the login is loaded before moving further.
  await page.waitForSelector("#PayRollNum");

  // This enters the login credentials.
  await page.type("#PayRollNum", "CustomerID");
  await page.type("#UserName", "UserName");
  await page.type("#Password", "Password");

  // This clicks the login button.
  await page.click("#btnLogin");

  // This waits for the page to load.
  await page.waitForNavigation();

  // This clicks the pay stubs button.
  await page.click("#NetPay");

  // This make sures that the page is loaded before moving further.
  await page.waitForSelector(".netPayContainer");

  // This downloads the pdf copy of the pay slip.
  await page.pdf({ path: "payslip[Month_Year].pdf", format: "A4", pageRanges: "1-1" });

  // This finally closes the browser.
  await browser.close();
})();