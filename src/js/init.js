import Dom from './helper/Dom.js';
import FacebookAuth from './service/facebook/FacebookAuth.js';
import TableauBuilder from './TableauBuilder.js';

var dom = new Dom;

var tableauBuilder = new TableauBuilder(tableau);
var connector = tableauBuilder.makeSchema();
connector = tableauBuilder.getData(connector);
tableauBuilder.registerConnector(connector);

window.onload = function(){
    document.getElementById("tableau-connect").addEventListener('click', function() {
        tableau.connectionName = "Facebook Posts";
        tableau.submit();
    });
};

window.onload = function(){
    document.getElementById("facebook-auth").addEventListener('click', function(e) {
        e.preventDefault();
        
        let facebook = new FacebookAuth(FB);

        facebook.getLoginStatus().then((response) => {
            return facebook.getAccessToken(response);
        }, (error) => {
            return facebook.login({'scopes': 'manage_user'})
                .then((response) => {
                    return facebook.getAccessToken(response);
                }, (error) => {
                    reject(response);
                });
        }).then((response) => {
            dom.addClass("tableau-block", "tableau_connect--show");
            dom.addClass("facebook-block", "facebook_auth--hide");
        }, (error) => {
            alert('error');
        });
    });
}