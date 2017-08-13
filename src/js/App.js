import FacebookPageListBuilder from './helper/FacebookPageListBuilder.js';

class App
{
    constructor(tableauBuilder, dom, facebookAuth, facebookRequests, urlParts)
    {
        this.tableauBuilder = tableauBuilder;

        this.dom = dom;

        this.facebookAuth = facebookAuth;

        this.facebookRequests = facebookRequests;

        this.urlParts = urlParts;
    }

    initiateTableau()
    {
        this.tableauBuilder.init();

        this.tableauBuilder.registerConnector(
            this.tableauBuilder.getData(this.tableauBuilder.makeSchema())
        );
    }

    authenticateWithFacebook()
    {
        this.facebookAuth.login({'scopes': 'read_insights, manage_pages'});
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
        this.facebookRequests.setAccessToken(accessToken);

        return this.facebookRequests.getPages();
    }

    buildFacebookPageList(pagesPromise)
    {
        pagesPromise.then((response) => {
            let facebookPageList = new FacebookPageListBuilder(this.dom, response.getTableauData());
            facebookPageList.build();
        });
    }

    submitTableau(tableau)
    {
        this.tableauBuilder.setConnectionData();
        tableau.connectionName = "Facebook Page Metrics";
        tableau.submit();
    }
}

export default App;
