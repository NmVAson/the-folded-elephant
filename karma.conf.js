module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        plugins: ['karma-mocha', 'karma-chai','karma-chrome-launcher'],

        files: [
            'src/*.js',
            'test/*.spec.js'
        ],

        reporters: ['progress'],

        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: false,

        logLevel: config.LOG_INFO,

        browsers: ['ChromeHeadless'],

    });
};