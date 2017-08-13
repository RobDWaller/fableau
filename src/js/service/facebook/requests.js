"use strict"

import Page from '../../mapper/Page.js';
import Post from '../../mapper/Post.js';
import PageImpression from '../../mapper/PageImpression.js';

class FacebookRequests
{
    constructor(facebookData)
    {
        this.facebookData = facebookData;

        this.urlPrepend = 'https://graph.facebook.com'
    }

    setAccessToken(accessToken)
    {
        console.log(accessToken);
        this.accessToken = accessToken;
    }

    getPosts(pageId)
    {
        return this.facebookData.getDataPaginate(`${this.urlPrepend}/${pageId}/posts?access_token=${this.accessToken}`)
            .then((result) => {
                return new Post(result);
            });
    }

    getPages()
    {
        return this.facebookData.getDataPaginate(`${this.urlPrepend}/me/accounts?access_token=${this.accessToken}`)
            .then((result) => {
                return new Page(result);
            });
    }

    getPageImpressions(pageId)
    {
        return this.facebookData.getData(
            `${this.urlPrepend}/${pageId}/insights/page_impressions,page_impressions_unique,page_impressions_paid,page_impressions_organic?access_token=${this.accessToken}`
        ).then((result) => {
            return new PageImpression(result);
        });
    }

    getAccessTokenStatus()
    {
        return this.facebookData.getData(`${this.urlPrepend}/oauth/access_token_info?access_token=${this.accessToken}`)
            .then((result) => {
                if (typeof(result.expires_in) === 'undefined') {
                    return false;
                }

                if (result.expires_in < 1) {
                    return false;
                }

                return true;
            });
    }
}

export default FacebookRequests;
