'use strict'

/**
 * Maps the page meta data from Facebook to a Tableau friendly format
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class Page {
  /**
     * @param array data
     */
  constructor (data) {
    if (typeof data === 'undefined') {
      throw new Error('Data is not defined!!')
    }

    this.data = data
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

    return this.data.map(function (row) {
      return {
        'page_id': row.id,
        'page_access_token': row.access_token,
        'page_name': row.name,
        'page_category': row.category,
        'page_image': `https://graph.facebook.com/${row.id}/picture`
      }
    })
  }
}

export default Page
