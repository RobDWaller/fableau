'use strict'

/**
 * Provides facade for looping through Facebook API requests
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class FacebookPageLoop {
  /**
     * @param Object facebookRequests
     */
  constructor (facebookRequests) {
    this.facebookRequests = facebookRequests

    this.data = []
  }

  /**
     * Get page data from Facebook
     *
     * @param array pageIds
     * @return Promise
     */
  getPages (pageIds) {
    let data = []

    return Promise.all(pageIds.map((page) => {
      return this.facebookRequests.getPage(page).then((result) => {
        data.push(result)
      })
    })).then(() => {
      return data
    })
  }

  /**
     * Get Facebook page metric data
     *
     * @param array pageIds
     * @return Promise
     */
  getPageMetrics (pageIds) {
    let data = []

    return Promise.all(pageIds.map((page) => {
      return this.facebookRequests.getPageMetrics(page).then((result) => {
        data.push(result)
      })
    })).then(() => {
      return data
    })
  }

  /**
     * Get Facebook posts data, posts made to pages
     *
     * @param array pageIds
     * @return Promise
     */
  getPosts (pageIds) {
    let data = []

    return Promise.all(pageIds.map((page) => {
      return this.facebookRequests.getPosts(page).then((result) => {
        data.push(result)
      })
    })).then(() => {
      return data
    })
  }

  /**
     * Get Facebook posts metric data
     *
     * @param array pageIds
     * @return Promise
     */
  getPostMetrics (pageIds) {
    let data = []

    return Promise.all(pageIds.map((page) => {
      return this.facebookRequests.getPostMetrics(page).then((result) => {
        data.push(result)
      })
    })).then(() => {
      return data
    })
  }
}

export default FacebookPageLoop
