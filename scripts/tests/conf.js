'use strict';
// for Protractor

exports.config = {
    // Testing FrameWorkにjasmineを利用
    framework: 'jasmine',

    // seleniumの待受URLを指定
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // 動作させるspecファイルを指定
    specs: ['test.js'],

    // テストブラウザの指定
    multiCapabilities: [
        { browserName: 'chrome' }
    ]
};
