'use strict'

/**
 * Define the columns that make up the Tableau post-metrics table
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
     * Define and return the columns that make up the Tableau post-metrics table
     *
     * @return array
     */
  getColumns () {
    return [{
      id: 'page_id',
      alias: 'Page Id',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_id',
      alias: 'Post Id',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_post_id',
      alias: 'Page Post Id',
      dataType: this.tableauDataTypeObject.string
    }, {
      id: 'post_stories',
      alias: 'Stories',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_storytellers',
      alias: 'Storytellers',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_story_adds',
      alias: 'Story Adds',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_engaged_users',
      alias: 'Engaged Users',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_consumptions',
      alias: 'Consumptions',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_consumptions_unique',
      alias: 'Consumptions Unique',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_impressions',
      alias: 'Impressions',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_impressions_unique',
      alias: 'Impressions Unique',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_impressions_paid',
      alias: 'Impressions Paid',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_impressions_paid_unique',
      alias: 'Impressions Paid Unique',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_reactions_like_total',
      alias: 'Reactions Like Total',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_reactions_love_total',
      alias: 'Reactions Love Total',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_reactions_wow_total',
      alias: 'Reactions Wow Total',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_reactions_haha_total',
      alias: 'Reactions Haha Total',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_reactions_sorry_total',
      alias: 'Reactions Sorry Total',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'post_reactions_anger_total',
      alias: 'Reactions Anger Total',
      dataType: this.tableauDataTypeObject.int
    }]
  }
}

export default PageColumns
