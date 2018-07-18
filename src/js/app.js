'use strict'

import FacebookPageListBuilder from './service/facebook/helper/page-list-builder.js'

/**
 * Control the general functionality of the Web Data Connector
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class App {
  /**
     * @param Dom dom
     * @param FacebookRequests facebookRequests
     * @param UrlParts urlParts
     */
  constructor (dom, facebookRequests, urlParts) {
    this.dom = dom

    this.facebookRequests = facebookRequests

    this.urlParts = urlParts
  }

  /**
     * Check the web page URL contains a Facebook access token.
     *
     * @return bool
     */
  urlHasFacebookAuthenticationDetails () {
    return window.location.href.search('#access_token') !== -1
  }

  /**
     * Change the main website buttons from the get started button to the
     * select facebook page buttons.
     */
  switchAppButtons () {
    this.dom.addClass('tableau-block', 'tableau_connect--show')
    this.dom.addClass('facebook-block', 'facebook_auth--hide')
  }

  /**
     * Retrieve the Facebook access token from the web page URL.
     *
     * @return string
     */
  getFacebookAccessToken () {
    return this.urlParts.getParts(window.location.href).access_token
  }

  /**
     * Retrieve a list of Facebook pages that the user has access to.
     *
     * @param string accessToken
     * @return array
     */
  getFacebookPages (accessToken) {
    return this.facebookRequests.getPages(accessToken)
  }

  /**
     * Build the list of Facebook pages to the web page
     *
     * @param Promise pagesPromise
     */
  buildFacebookPageList (pagesPromise) {
    pagesPromise.then((response) => {
      let facebookPageList = new FacebookPageListBuilder(this.dom, response.getTableauData())
      facebookPageList.build()
    })
  }
}

export default App
