// redirect.js

async function handleRedirect(page) {

  console.log("Waiting for redirect page...");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(2000);

  // SMS option click (if exists)
  const smsOption = page.getByText("Get code via SMS", { exact: false });

  if (await smsOption.count() > 0) {
    await smsOption.first().click();
    console.log("SMS selected");
    await page.waitForTimeout(1500);
  } else {
    console.log("SMS option not found");
  }

  // Continue click
  const continueBtn = page.getByText("Continue", { exact: false });

  if (await continueBtn.count() > 0) {

    await Promise.all([
      page.waitForNavigation().catch(() => {}),
      continueBtn.first().click()
    ]);

    console.log("Continue clicked");
    console.log("Final URL:", page.url());

  } else {
    console.log("Continue button not found");
  }
}

module.exports = handleRedirect;
