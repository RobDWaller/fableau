"use strict"

class FacebookAuth
{
    constructor(facebook)
    {
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
        return new Promise((resolve, reject) => {
            this.facebook.login((response) => {
                if (response.status === 'connected') {
                    resolve(response);
                }

                reject(response);
            }, scopes);
        });
    }

    getAccessToken(loginResponse)
    {
        return loginResponse.authResponse.accessToken;
    }
}

export default FacebookAuth;
