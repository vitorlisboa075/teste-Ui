const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ubaw7p',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'http://lojaebac.ebaconline.art.br/'
    e2e: {
      baseUrl: 'http://lojaebac.ebaconline.art.br/',
      video: true,
    },
  },
});
