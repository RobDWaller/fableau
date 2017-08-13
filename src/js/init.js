import "babel-polyfill";
import App from './App.js';
import Message from './helper/Message.js';
import MessageRemover from './helper/MessageRemover.js';
import Dom from './helper/Dom.js';
import FacebookAuth from './service/facebook/FacebookAuth.js';
import FacebookRequests from './service/facebook/FacebookRequests.js';
import FacebookData from './service/facebook/FacebookData.js';
import UrlParts from './helper/FacebookUrlParts.js';
import Ajax from './helper/Ajax.js';
import TableauBuilder from './TableauBuilder.js';
import * as Config from './Config.js'

window.fbAsyncInit = function() {
    FB.init({
        appId            : Config.facebook.client_id,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.9'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.onload = function(){

    var dom = new Dom;

    var app = new App(
        new TableauBuilder(tableau),
        dom,
        new FacebookAuth(Config.facebook.client_id, FB),
        new FacebookRequests(new FacebookData(new Ajax)),
        new UrlParts
    );

    app.initiateTableau();

    dom.getId("facebook-auth").addEventListener('click', function(e) {
        e.preventDefault();

        app.authenticateWithFacebook();
    });

    if (app.urlHasFacebookAuthenticationDetails()) {
        app.switchAppButtons();

        app.saveFacebookAuthenticationDetails(app.getFacebookAccessToken());

        let pages = app.getFacebookPages(app.getFacebookAccessToken());

        app.buildFacebookPageList(pages);
    }

    dom.getId("tableau-connect").addEventListener('click', function(e) {
        e.preventDefault();
        app.submitTableau(tableau);
    });

    dom.getId("holder").addEventListener("click", (e) => {
        let messageRemover = new MessageRemover(dom);
        messageRemover.remove(e);
    });
}
