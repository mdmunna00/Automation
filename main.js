// main.js

const { chromium } = require("playwright");
const login = require("./login");
const handleRedirect = require("./redirect");

const URL = "https://your-test-site.com";
const VALUE = "+880XXXXXXXXX";

(async () => {

  const browser = await chromium.launch({
    headless: false,
    slowMo: 80
  });

  const page = await browser.newPage();

  try {

    await login(page, URL, VALUE);
    await handleRedirect(page);

    console.log("Full flow completed");

  } catch (err) {
    console.log("Error:", err);
  }

})();
