"use strict"

import "babel-polyfill";
import App from './app.js';
import Message from './helper/message.js';
import MessageRemover from './helper/message-remover.js';
import Dom from './helper/dom.js';
import FacebookAuth from './service/facebook/auth.js';
import FacebookRequests from './service/facebook/requests.js';
import FacebookData from './service/facebook/data.js';
import UrlParts from './service/facebook/helper/url-parts.js';
import Ajax from './helper/ajax.js';
import TableauBuilder from './tableau/builder.js';
import * as Config from './config.js'

/**
 * Core Fableau app file, begins with kicking offing and configuring Facebook
 * integration.
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */


/**
 * Starting place for all functionality, events, etc.
 */
window.onload = function(){

    window.fbAsyncInit = function(){
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

    /**
     * Initiate simple wrapper for working with the DOM
     */
    var dom = new Dom;

    /**
     * Iniate core Fableau App with what it requires.
     */
    var app = new App(
        new TableauBuilder(tableau),
        dom,
        new FacebookRequests(new FacebookData(new Ajax)),
        new UrlParts
    );

    app.initiateTableau();

    dom.getId("facebook-auth").addEventListener('click', function(e) {
        e.preventDefault();

        let auth = new FacebookAuth(Config.facebook.client_id, FB);

        auth.login({'scopes': 'read_insights, manage_pages'});
    });

    if (app.urlHasFacebookAuthenticationDetails()) {
        app.switchAppButtons();

        let pages = app.getFacebookPages(app.getFacebookAccessToken());

        app.buildFacebookPageList(pages);
    }

    dom.getId("tableau-connect").addEventListener('click', function(e) {
        e.preventDefault();
        app.submitTableau();
    });

    dom.getId("holder").addEventListener("click", (e) => {
        let messageRemover = new MessageRemover(dom);
        messageRemover.remove(e);
    });
}
