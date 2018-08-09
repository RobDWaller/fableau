'use strict'

/**
 * Provides Facebook specific wrappers for making AJAX requests
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class FacebookData {
  /**
   * @param Object ajax
   */
  constructor (ajax) {
    this.ajax = ajax

    this.data = []
  }

  /**
   * Facebook provide data in paginated batches. This method loops through
   * those requests as defined.
   *
   * @param string url
   * @param string direction
   * @param bool hasLimit
   * @param int count
   * @param int limit
   *
   * @todo has boolean flag argument
   */
  getDataPaginate (url, direction = 'next', hasLimit = false, count = 0, limit = 3) {
    console.log(url)

    return this.ajax.getData(url).then((result) => {
      this.data = this.data.concat(result.data)

      return result
    }).then((result) => {
      if (typeof (result.paging[direction]) !== 'undefined' && result.paging[direction].length && this.hasNotReachedLimit(hasLimit, count, limit)) {
        count++
        return this.getDataPaginate(result.paging[direction], direction, hasLimit, count, limit)
      } else {
        return this.data
      }
    })
  }

  /**
   * This method will make an individual request to Facebook for API data.
   *
   * @param string url
   */
  getData (url) {
    return this.ajax.getData(url).then((result) => {
      if (typeof (result.data) === 'undefined') {
        return result
      }

      return result.data
    })
  }

  /**
   * Check whetehr Facebook pagination through API requests has reached its limit
   *
   * @param bool hasLimit
   * @param int count
   * @param int limit
   *
   * @todo has boolean flag argument
   */
  hasNotReachedLimit (hasLimit, count, limit) {
    if (!hasLimit) {
      return true
    }

    if (count >= limit) {
      return false
    }

    return true
  }
}

export default FacebookData
