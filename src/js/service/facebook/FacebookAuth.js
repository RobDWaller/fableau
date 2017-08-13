"use strict"

class FacebookAuth
{
    constructor(clientId, facebook)
    {
        this.clientId = clientId;

        this.facebook = facebook;
    }

    getLoginStatus()
    {
        return new Promise((resolve, reject) => {
            this.facebook.getLoginStatus((response) => {
                if (response.status === 'connected') {
                    resolve(response);
                }
                reject(response);
            });
        });
    }

    login(scopes = {})
    {
        window.location = `https://www.facebook.com/v2.9/dialog/oauth?client_id=${this.clientId}&redirect_uri=${encodeURI(window.location.href)}&response_type=token&scope=${scopes.scopes}`;
    }

    getAccessToken(loginResponse)
    {
        return this.facebook.getAuthResponse().accessToken;
    }
}

export default FacebookAuth;
