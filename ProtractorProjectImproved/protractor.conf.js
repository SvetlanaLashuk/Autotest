exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor.
    // They may include glob patterns.
    specs: ['spec/spec1.e2e-spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};