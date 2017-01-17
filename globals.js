/**
 * Created by sproutlogix on 16/1/17.
 */
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    themeName: 'cover',
    reportsDirectory: "./reports",
    relativeScreenshots: true
});
module.exports = {
    before : function(done){
        console.log("*****************Inside before**************")
        done();
    },
    beforeEach : function(browser,done) {
        console.log("*****************Inside beforeEach**************")
        browser.url("https://stage-pcp.quartethealth.com/")
        setTimeout(function() {
            done();
        });
    },

    afterEach : function(browser,done) {
        console.log("*****************Inside afterEach**************")
        browser.end()
        setTimeout(function() {
            done();
        });
    },

    after : function(done){
        console.log("*****************Inside after**************")
        done();
    },

    reporter: reporter.fn
};
