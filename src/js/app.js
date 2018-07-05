"use strict"

import FacebookPageListBuilder from './service/facebook/helper/page-list-builder.js';

class App
{
    constructor(dom, facebookRequests, urlParts)
    {
        this.dom = dom;

        this.facebookRequests = facebookRequests;

        this.urlParts = urlParts;
    }

    urlHasFacebookAuthenticationDetails()
    {
        return window.location.href.search('#access_token') !== -1;
    }

    switchAppButtons()
    {
        this.dom.addClass("tableau-block", "tableau_connect--show");
        this.dom.addClass("facebook-block", "facebook_auth--hide");
    }

    getFacebookAccessToken()
    {
        return this.urlParts.getParts(window.location.href).access_token;
    }

    saveFacebookAuthenticationDetails(accessToken)
    {
        this.tableauBuilder.setPassword(accessToken);
    }

    getFacebookPages(accessToken)
    {
        //this.facebookRequests.setAccessToken(accessToken);

        return this.facebookRequests.getPages(accessToken);
    }

    buildFacebookPageList(pagesPromise)
    {
        pagesPromise.then((response) => {
            let facebookPageList = new FacebookPageListBuilder(this.dom, response.getTableauData());
            facebookPageList.build();
        });
    }
}

export default App;
