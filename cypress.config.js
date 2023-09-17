const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: { chromeWebSecurity: false,
    baseUrl: 'https://notes-serverless-app.com',
    viewportWidthBreakpoint: 768,
    defaultCommandTimeout: 20000,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
})
