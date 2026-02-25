// main.js
const { chromium } = require("playwright");
const login = require("./login");
const handleRedirect = require("./redirect");

const VALUE = "+8801816355617";

(async () => {

  const browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"]
  });

  const context = await browser.newContext({
    viewport: null
  });

  const page = await context.newPage();

  try {

    await login(page, VALUE);
    await handleRedirect(page);

    console.log("Flow completed successfully");

  } catch (err) {
    console.log("Error:", err);
  }

})();
