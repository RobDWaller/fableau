import Dom from './helper/Dom.js';
import FacebookAuth from './service/facebook/FacebookAuth.js';
import FacebookRequests from './service/facebook/FacebookRequests.js';
import FacebookData from './service/facebook/FacebookData.js';
import Ajax from './helper/Ajax.js';
import FacebookPageListBuilder from './helper/FacebookPageListBuilder.js';
import TableauBuilder from './TableauBuilder.js';

var dom = new Dom;

var tableauBuilder = new TableauBuilder(tableau);
tableauBuilder.init();
var connector = tableauBuilder.makeSchema();
connector = tableauBuilder.getData(connector);
tableauBuilder.registerConnector(connector);

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
            tableauBuilder.setPassword(response);
            var facebookRequests = new FacebookRequests(new FacebookData(new Ajax), response);

            facebookRequests.getPages().then((response) => {
                var facebookPageList = new FacebookPageListBuilder(dom, response.getTableauData());
                facebookPageList.build();
            });

        }, (error) => {
            alert('error');
        });
    });

    document.getElementById("tableau-connect").addEventListener('click', function(e) {
        e.preventDefault();
        tableau.connectionName = "Facebook Posts";
        tableau.submit();
    });
}