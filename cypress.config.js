const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 20000,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
})
