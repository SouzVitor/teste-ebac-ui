const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '64io2h',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br'
   
  },
  
  setupNodeEvents() {
    // implement node event listeners here

  },
});
