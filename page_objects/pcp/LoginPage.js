/**
 * Created by ashi.sri.18 on 13-01-2017.
 */
module.exports ={
    url: function() {
        return "https://stage-pcp.quartethealth.com/";
    },
    "elements": {
        "emailIdField" : {
            "selector":"input[name='username']"
        },
        "passwordField":{
            "selector":"input[name='password']"
        },
        "loginBtn":{
            "selector":"input[value='Log In']"
        }
    },
    "commands": [{
        "Login_as_Ashish": function(){
            this
                .setValue("@emailIdField", "asrivastava+stage@quartethealth.com")
                .setValue("@passwordField", "Srivastava18")
                .click("@loginBtn");
            return this;
        }
    }]
};