"use strict"

import Page from '../../mapper/Page.js';
import Post from '../../mapper/Post.js';
import User from '../../mapper/User.js';

class FacebookRequests
{
    constructor(facebookData, accessToken)
    {
        this.facebookData = facebookData;

        this.accessToken = accessToken;
    }

    getPosts()
    {
        return this.facebookData.getData();
    }

    getPages()
    {
        return this.facebookData.getData(`https://graph.facebook.com/me/accounts?access_token=${this.accessToken}`)
            .then((result) => {
                return new Page(result);
            });
    }
}

export default FacebookRequests;
