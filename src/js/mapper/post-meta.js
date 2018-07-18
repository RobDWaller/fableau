'use strict'

import DateTime from '../helper/date-time.js'

/**
 * Maps the post meta data from Facebook to a Tableau friendly format
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class Post {
  /**
     * @param array data
     * @param int pageId
     */
  constructor (data, pageId) {
    if (typeof data === 'undefined') {
      throw new Error('Data is not defined!!')
    }

    this.data = data

    this.pageId = pageId
  }

  /**
     * Map the data to a Tableau format
     *
     * @return array
     */
  getTableauData () {
    if (!Array.isArray(this.data) || this.data.length === 0) {
      throw new Error('Data is not an array or is an empty!!')
    }

    return this.data.map((row) => {
      return {
        'page_id': row.id.split('_')[0],
        'post_id': row.id,
        'message': row.message,
        'created_at': this.convertDateToTableauDate(row.created_time)
      }
    })
  }

  /**
     * Convert a Facebook date time string to a Tableau date time string
     *
     * @param string dateTimeString
     * @return string
     */
  convertDateToTableauDate (dateTimeString) {
    let date = new DateTime()

    return date.getTableauTimeString(dateTimeString)
  }
}

export default Post
