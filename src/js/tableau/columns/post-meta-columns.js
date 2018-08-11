'use strict'

/**
 * Define the columns that make up the Tableau posts meta table
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class PostMetaColumns {
  /**
   * @param Object
   */
  constructor (tableauDataTypeObject) {
    this.tableauDataTypeObject = tableauDataTypeObject
  }

  /**
   * Define and return the columns that make up the Tableau posts table
   *
   * @return array
   */
  getColumns () {
    return [{
      id: 'page_id',
      alias: 'facebook page id',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_id',
      alias: 'facebook post id',
      dataType: this.tableauDataTypeObject.string
    }, {
      id: 'message',
      alias: 'facebook post message',
      dataType: this.tableauDataTypeObject.string
    }, {
      id: 'created_at',
      alias: 'facebook post created time',
      dataType: this.tableauDataTypeObject.datetime
    }]
  }
}

export default PostMetaColumns
