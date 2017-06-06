"use strict"

class FacebookController
{
    constructor(facebookModel, accessToken)
    {
        this.facebookModel = facebookModel;

        this.accessToken = accessToken;
    }

    getPosts()
    {
        return this.facebookModel.getPosts();
    }

    getUsers()
    {
        return this.facebookModel.getUsers();
    }

    getPages()
    {
        return this.facebookModel.getPages(`https://graph.facebook.com/me/accounts?access_token=${this.accessToken}`);
    }
}

export default FacebookController;
