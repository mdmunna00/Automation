// login.js

async function login(page, url, value) {

  console.log("Opening login page...");
  await page.goto(url);

  console.log("Waiting for input...");
  await page.locator("input").first().waitFor();

  console.log("Typing value...");
  await page.locator("input").first().fill(value);

  await page.waitForTimeout(1000);

  console.log("Submitting...");

  // যদি button থাকে
  const submit = page.locator("button[type='submit']");

  if (await submit.count() > 0) {
    await Promise.all([
      page.waitForNavigation().catch(() => {}),
      submit.first().click()
    ]);
  } else {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
  }

  console.log("Login done. Current URL:", page.url());
}

module.exports = login;
