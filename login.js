// login.js
async function login(page, VALUE) {

  console.log("Opening login page...");
  await page.goto("https://test.com", { waitUntil: "domcontentloaded" });

  // Cookie handle
  await page.click("text=Accept", { timeout: 5000 }).catch(() => {});
  await page.click("text=Reject", { timeout: 5000 }).catch(() => {});

  console.log("Waiting for input...");
  await page.waitForSelector("input");

  console.log("Typing...");
  await page.fill("input", VALUE);

  await page.waitForTimeout(1000);

  console.log("Submitting...");
  await page.keyboard.press("Enter");

  await page.waitForLoadState("networkidle");

  console.log("Login redirect done");
}

module.exports = login;
