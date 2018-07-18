'use strict'

/**
 * Methods to help with the Facebook authentication process.
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class FacebookAuth {
  /**
   * Load client id and Facebook SDK Library
   */
  constructor (clientId, facebook) {
    this.clientId = clientId

    this.facebook = facebook
  }

  /**
   * Check the user is logged into Facebook.
   *
   * @return Promise
   * @todo not sure if this is usesd, may be dead code.
   */
  getLoginStatus () {
    return new Promise((resolve, reject) => {
      this.facebook.getLoginStatus((response) => {
        if (response.status === 'connected') {
          resolve(response)
        }
        reject(response)
      })
    })
  }

  /**
   * Redirect user to Facebook Login page
   *
   * @param Object scopes
   */
  login (scopes = {}) {
    window.location = `https://www.facebook.com/v2.9/dialog/oauth?client_id=${this.clientId}&redirect_uri=${encodeURI(window.location.href)}&response_type=token&scope=${scopes.scopes}`
  }
}

export default FacebookAuth
