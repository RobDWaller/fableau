'use strict'

/**
 * Class that breaks apart the web page URL returned by Facebook after
 * authentication. The aim is to get the access token.
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class FacebookUrlParts {
  /**
   * Break the Facebook authentication URL down into its component parts
   *
   * @param string url
   * @return array
   */
  getParts (url) {
    let result = {}

    let parts = this.splitUrl(url)

    result['url'] = parts[0]

    result['access_token'] = this.getPart(parts[1], 'access_token')

    result['expires_in'] = this.getPart(parts[1], 'expires_in')

    return result
  }

  /**
   * Split the URL on the hash that Facebook place in the URL
   *
   * @param string url
   * @return array
   */
  splitUrl (url) {
    return url.split('#')
  }

  /**
   * Retrieve a specific part of the URL string.
   *
   * @param string partString
   * @param string part
   * @return Object
   */
  getPart (partString, part) {
    let parts = partString.split('&')

    let result = parts.reduce((a, b) => {
      let parts = b.split('=')

      a[parts[0]] = parts[1]

      return a
    }, {})

    return result[part]
  }
}

export default FacebookUrlParts
