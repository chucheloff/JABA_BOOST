exports.config = {

    runner: 'local',
    
    specs: [
        './test/specs/**.spec.js'
    ],

    exclude: [
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        "platformName": "Android",
        // "deviceName" : "f05778b3"
    }],
    
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,

    baseUrl: 'http://localhost',
    
    waitforTimeout: 1000000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 5,
    
    port: 4723,
    services: ['appium'],
    
    framework: 'jasmine',

    reporters: ['spec'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1200000,
        expectationResultHandler: function(passed, assertion) {
        }
    },   
    jasmineOpts: {
        defaultTimeoutInterval: 1200000,
        expectationResultHandler: function(passed, assertion) {
        }
    }   
}
