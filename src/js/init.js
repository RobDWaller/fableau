import Dom from './helper/Dom.js';
import FacebookAuth from './service/facebook/FacebookAuth.js';
import FacebookController from './service/facebook/FacebookController.js';
import FacebookModel from './service/facebook/FacebookModel.js';
import Ajax from './helper/Ajax.js';
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
            var facebookController = new FacebookController(new FacebookModel(new Ajax), response);

            facebookController.getPages().then((response) => {
                console.log('before');
                console.log(response);
                console.log('after');
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