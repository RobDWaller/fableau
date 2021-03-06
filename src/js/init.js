'use strict'

import 'babel-polyfill'
import App from './app.js'
import MessageRemover from './helper/message-remover.js'
import Dom from './helper/dom.js'
import FacebookAuth from './service/facebook/auth.js'
import FacebookRequests from './service/facebook/requests.js'
import FacebookData from './service/facebook/data.js'
import UrlParts from './service/facebook/helper/url-parts.js'
import Ajax from './helper/ajax.js'
import TableauBuilder from './tableau/builder.js'
import * as Config from '../../config.js'
import '../scss/main.scss';

/**
 * Core Fableau app file, begins with kicking offing and configuring Facebook
 * integration.
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */

/**
  * Initiate and Load Tableau
  */
(function () {
  var tableauBuilder = new TableauBuilder(tableau, new Ajax())

  try {
    tableauBuilder.init()
    var connector = tableauBuilder.makeSchema()
    connector = tableauBuilder.getData(connector)
    tableauBuilder.registerConnector(connector)
  } catch (e) {
    /* global tableau */
    tableau.abortWithError(e)
  }
})()

/**
 * Starting place for all functionality, events, etc.
 */
window.onload = function () {
  /**
   * Load Facebook
   */
  window.fbAsyncInit = function () {
    /* global FB */
    FB.init({
      appId: Config.facebook.client_id,
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.9'
    })
    FB.AppEvents.logPageView()
  };

  (function (d, s, id) {
    var js; var fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    js = d.createElement(s); js.id = id
    js.src = '//connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'facebook-jssdk'))

  /**
   * Initiate simple wrapper for working with the DOM
   */
  var dom = new Dom()

  /**
   * Iniate core Fableau App with what it requires.
   */
  var app = new App(
    dom,
    new FacebookRequests(new FacebookData(new Ajax())),
    new UrlParts()
  )

  /**
   * Start the Facebook authentication process
   */
  dom.getId('facebook-auth').addEventListener('click', function (e) {
    e.preventDefault()

    let auth = new FacebookAuth(Config.facebook.client_id, FB)

    auth.login({'scopes': 'read_insights, manage_pages'})
  })

  /**
   * Check if the page is loading with the Facebook auth token and load the
   * Facebook pages selector page
   */
  if (app.urlHasFacebookAuthenticationDetails()) {
    app.switchAppButtons()

    let pages = app.getFacebookPages(app.getFacebookAccessToken())

    app.buildFacebookPageList(pages)
  }

  /**
   * Save Facebook Auth Data to Tableau
   * Async function because the page tokens must be received from Facebook
   * before auth data is submitted to Tableau.
   */
  async function submitTableau () {
    var tableauBuilder = new TableauBuilder(tableau, new Ajax())
    await tableauBuilder.setConnectionData(app.getFacebookAccessToken())
    tableauBuilder.setConnectionName('Fableau Facebook Metrics')
    // Not used by the Web Data Connector, password is required by Tableau.
    tableauBuilder.setPassword('password')
    tableauBuilder.submit()
  }

  /**
   * Save Facebook Auth Data to Tableau
   */
  dom.getId('tableau-connect').addEventListener('click', function (e) {
    e.preventDefault()

    submitTableau()
  })

  /**
   * Remove any error messages from the DOM
   */
  dom.getId('holder').addEventListener('click', (e) => {
    let messageRemover = new MessageRemover(dom)
    messageRemover.remove(e)
  })
}
