/**
 * Created by sproutlogix on 16/1/17.
 */
module.exports = {
    "Search patient": function(browser){
        var homePage = browser.page.pcp.HomePage();
        browser
            homePage
                .Search_Patient_Name();
        // browser.end()
    }
};