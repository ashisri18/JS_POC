/**
 * Created by ashi.sri.18 on 13-01-2017.
 */
module.exports = {
    "elements":{
        "profileNameTxt":{
            "selector":"span[data-reactid='.0.0.0.0.1.1.0.1']"
        },
        "searchName":{
            "selector":"input[name='search']"
        },
        "searchResult":{
            "selector":"div[data-reactid='.0.0.0.1.0.1.0.0.0.$0.$=1$patient.0.0']"
        }
    },
    "commands":[{
        "Verify_profile_name":function(){
            this
                .waitForElementVisible("@profileNameTxt", 20000)
                .assert.containsText("@profileNameTxt", "Ashish Srivastava");
            return this;
        },
        "Search_Patient_Name":function(){
            this
                .setValue("@searchName", "Chinmayee_1")
                .setValue("@searchName", this.api.Keys.ENTER);
            return this;
        },
        "Verify_Patient" : function(){
            this
                .waitForElementVisible("@searchResult", 20000)
                .assert.containsText("@searchResult", "Chinmayee_1")
                .click("@searchResult");
            return this;
        }
    }]
};