// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [
    '*.js'
  ],
  chromeDriver: 'C:/Users/PRO/AppData/Roaming/npm/node_modules/protractor/selenium/chromedriver_2.21.exe',

  seleniumServerJar: 'C:/PRO/<username>/AppData/Roaming/npm/node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  baseUrl: 'http://localhost:63342/angularYO/app/',
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub'
};
