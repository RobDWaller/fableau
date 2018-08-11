'use strict'

import Dom from '../helper/dom.js'
import Ajax from '../helper/ajax.js'
import FacebookPageLoop from '../service/facebook/helper/page-loop.js'
import FacebookRequests from '../service/facebook/requests.js'
import FacebookData from '../service/facebook/data.js'
import PostMetaColumns from '../tableau/columns/post-meta-columns.js'
import PageMetaColumns from '../tableau/columns/page-meta-columns.js'
import PostMetricsColumns from '../tableau/columns/post-metric-columns.js'
import PageMetricsColumns from '../tableau/columns/page-metric-columns.js'
import TableFactory from './table-factory.js'

/**
 * Main Tableau class that builds and configures the Tableau Web Data Connector
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class TableauBuilder {
  /**
   * Inject the Tableau SDK object
   *
   * @param Object tableau
   * @param Ajax ajax
   */
  constructor (tableau, ajax) {
    this.tableau = tableau

    this.ajax = ajax
  }

  /**
   * Start the Tableau build process, set the auth type to custom
   */
  init () {
    this.tableau.authType = this.tableau.authTypeEnum.custom
  }

  /**
   * Define the schema for the tables to create in Tableau.
   *
   * @return Object
   */
  makeSchema () {
    var tableauConnector = this.tableau.makeConnector()

    var tableFactory = new TableFactory()

    tableauConnector.getSchema = (schemaCallback) => {
      schemaCallback([
        tableFactory.makeTable('posts', 'Posts Meta Data', new PostMetaColumns(this.tableau.dataTypeEnum)).getTable(),
        tableFactory.makeTable('pages', 'Pages Meta Data', new PageMetaColumns(this.tableau.dataTypeEnum)).getTable(),
        tableFactory.makeTable('post_metrics', 'Posts Metric Data', new PostMetricsColumns(this.tableau.dataTypeEnum)).getTable(),
        tableFactory.makeTable('page_metrics', 'Pages Metric Data', new PageMetricsColumns(this.tableau.dataTypeEnum)).getTable()
      ])
    }

    return tableauConnector
  }

  /**
   * Define what data the WDC should collect from Facebook, when and where.
   *
   * @param Object tableauConnector
   * @return Object
   * @todo Sort out the Facebook tooken check and the commented code.
   */
  getData (tableauConnector) {
    tableauConnector.getData = (table, doneCallback) => {
      let facebook = new FacebookRequests(new FacebookData(new Ajax()))

      let facebookLoop = new FacebookPageLoop(facebook)

      let pageIds = JSON.parse(this.tableau.connectionData)

      // facebook.getAccessTokenStatus().then((result) => {
      //     if (!result) {
      //         this.tableau.abortForAuth('The Facebook Access Token has expired, please re-authenticate.');
      //     }
      // });

      if (table.tableInfo.id === 'posts') {
        facebookLoop.getPosts(pageIds)
          .then((result) => {
            return result.map((post) => {
              table.appendRows(post.getTableauData())
            })
          })
          .then(() => { doneCallback() })
      }

      if (table.tableInfo.id === 'pages') {
        facebookLoop.getPages(pageIds)
          .then((result) => {
            return result.map((page) => {
              table.appendRows(page.getTableauData())
            })
          })
          .then(() => { doneCallback() })
      }

      if (table.tableInfo.id === 'post_metrics') {
        facebookLoop.getPostMetrics(pageIds)
          .then((result) => {
            return result.map((post) => {
              table.appendRows(post.getTableauData())
            })
          })
          .then(() => { doneCallback() })
      }

      if (table.tableInfo.id === 'page_metrics') {
        facebookLoop.getPageMetrics(pageIds)
          .then((result) => {
            return result.map((page) => {
              table.appendRows(page.getTableauData())
            })
          })
          .then(() => { doneCallback() })
      }
    }

    return tableauConnector
  }

  /**
   * @todo not sure if this method is actually used.
   */
  // processResult(table, result, pageId = null)
  // {
  //     table.appendRows(result.getTableauData(pageId));
  // }

  /**
   * Register the Tableau connector, this is one of the final steps.
   *
   * @param Object tableauConnector
   */
  registerConnector (tableauConnector) {
    this.tableau.registerConnector(tableauConnector)
  }

  /**
   * Sets the Tableau WDC password property. Only used because Tableau requires
   * the password property to be set.
   *
   * @param string password
   */
  setPassword (password) {
    this.tableau.password = password
  }

  /**
   * Set the connection data for Tableau to use for Facebook requests. This
   * includes the Facebook page access token and the page id.
   *
   * @param string accessToken
   * @return Promise
   */
  setConnectionData (accessToken) {
    let dom = new Dom()

    let pages = dom.getClass('facebook-page-list__input')

    let pageIds = Array.prototype.filter.call(pages, (item) => {
      if (item.checked) {
        return item
      }
    }).map((item) => {
      return {
        'page_id': item.value
      }
    })

    let data = []

    return Promise.all(pageIds.map((id) => {
      return this.ajax.getData(`https://graph.facebook.com/${id.page_id}?access_token=${accessToken}&fields=access_token`).then((result) => {
        data.push(result)
      })
    })).then(() => {
      this.tableau.connectionData = JSON.stringify(data)
    })
  }

  /**
   * Name the Tableau Web Data Connector
   *
   * @param string connectionName
   */
  setConnectionName (connectionName) {
    this.tableau.connectionName = connectionName
  }

  /**
   * The final step, submit the Tableau Web Data Connector
   */
  submit () {
    this.tableau.submit()
  }
}

export default TableauBuilder
