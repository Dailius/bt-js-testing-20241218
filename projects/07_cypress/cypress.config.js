const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 10000,
  // viewportWidth: 800,
  // viewportHeight: 1500,
  viewport: 'ipad-2',

  e2e: {
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
            launchOptions.args.push(
              "--incognito"
            );
        }

        return launchOptions;
      });
      
    },
  },
});
