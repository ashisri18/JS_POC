/**
 * Created by ashi.sri.18 on 10-01-2017.
 */
module.exports = {
    "Enetr login credentials" : function(browser){
        var loginPage = browser.page.pcp.LoginPage();
        // browser
        //     loginPage.navigate()
        //         .url();
        browser
            .windowMaximize()
            .assert.title('Quartet PCP')
            loginPage
                .Login_as_Ashish();
    },

    "Verify home page" : function(browser) {
        var homePage = browser.page.pcp.HomePage();
        browser
            homePage
                .Verify_profile_name();
    },

    "Search patient": function(browser){
        var homePage = browser.page.pcp.HomePage();
        browser
        homePage
            .Search_Patient_Name()
            .Verify_Patient();
        browser
            .pause(10000)
        // browser.end()
    }
};