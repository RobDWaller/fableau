'use strict'

/**
 * Define the columns that make up the Tableau pages table
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class PageColumns {
  /**
   * @param Object
   */
  constructor (tableauDataTypeObject) {
    this.tableauDataTypeObject = tableauDataTypeObject
  }

  /**
   * Define and return the columns that make up the Tableau pages table
   *
   * @return array
   */
  getColumns () {
    return [{
      id: 'page_id',
      alias: 'Page ID',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_name',
      alias: 'Name',
      dataType: this.tableauDataTypeObject.string
    }, {
      id: 'page_category',
      alias: 'Category',
      dataType: this.tableauDataTypeObject.string
    }, {
      id: 'page_image',
      alias: 'Picture',
      dataType: this.tableauDataTypeObject.string
    }, {
      id: 'page_about',
      alias: 'About',
      dataType: this.tableauDataTypeObject.string
    }, {
      id: 'page_link',
      alias: 'Link',
      dataType: this.tableauDataTypeObject.string
    }]
  }
}

export default PageColumns
