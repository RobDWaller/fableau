'use strict'

/**
 * Define the columns that make up the Tableau page-metrics table
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class PageImpressionColumns {
  /**
   * @param Object
   */
  constructor (tableauDataTypeObject) {
    this.tableauDataTypeObject = tableauDataTypeObject
  }

  /**
   * Define and return the columns that make up the Tableau page-metrics table
   *
   * @return array
   */
  getColumns () {
    return [{
      id: 'page_id',
      alias: 'Page ID',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_day',
      alias: 'Impressions Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_week',
      alias: 'Impressions Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_days_28',
      alias: 'Impressions Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_unique_day',
      alias: 'Impressions Unique Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_unique_week',
      alias: 'Impressions Unique Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_unique_days_28',
      alias: 'Impressions Unique Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_paid_day',
      alias: 'Impressions Paid Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_paid_week',
      alias: 'Impressions Paid Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_paid_days_28',
      alias: 'Impressions Paid Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_organic_day',
      alias: 'Impressions Organic Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_organic_week',
      alias: 'Impressions Organic Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_impressions_organic_days_28',
      alias: 'Impressions Organic Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_engaged_users_day',
      alias: 'Engaged Users Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_engaged_users_week',
      alias: 'Engaged Users Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_engaged_users_days_28',
      alias: 'Engaged Users Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_consumptions_day',
      alias: 'Consumptions Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_consumptions_week',
      alias: 'Consumptions Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_consumptions_days_28',
      alias: 'Consumptions Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_consumptions_unique_day',
      alias: 'Consumptions Unique Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_consumptions_unique_week',
      alias: 'Consumptions Unique Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_consumptions_unique_days_28',
      alias: 'Comsumptions Unique Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_negative_feedback_day',
      alias: 'Negative Feedback Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_negative_feedback_week',
      alias: 'Negative Feedback Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_negative_feedback_days_28',
      alias: 'Negative Feedback Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_negative_feedback_unique_day',
      alias: 'Negative Feedback Unique Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_negative_feedback_unique_week',
      alias: 'Negative Feedback Unique Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_negative_feedback_unique_days_28',
      alias: 'Negative Feedback Unique Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_fan_adds_unique_day',
      alias: 'Fan Adds Unique Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_fan_adds_unique_week',
      alias: 'Fan Adds Unique Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_fan_adds_unique_days_28',
      alias: 'Fan Adds Unique Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_views_total_day',
      alias: 'Views Total Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_views_total_week',
      alias: 'Views Total Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_views_total_days_28',
      alias: 'Views Total Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_views_logged_in_unique_day',
      alias: 'Views Logged In Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_views_logged_in_unique_week',
      alias: 'Views Logged In Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_views_logged_in_unique_days_28',
      alias: 'Views Logged In Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_day',
      alias: 'Posts Impressions Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_week',
      alias: 'Posts Impressions Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_days_28',
      alias: 'Posts Impressions Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_unique_day',
      alias: 'Posts Impressions Unique Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_unique_week',
      alias: 'Posts Impressions Unique Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_unique_days_28',
      alias: 'Posts Impressions Unique Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_paid_day',
      alias: 'Posts Impressions Paid Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_paid_week',
      alias: 'Posts Impressions Paid Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_paid_days_28',
      alias: 'Posts Impressions Paid Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_organic_day',
      alias: 'Posts Impressions Organic Last Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_organic_week',
      alias: 'Posts Impressions Organic Last Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_posts_impressions_organic_days_28',
      alias: 'Posts Impressions Organic Last Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_post_engagements_day',
      alias: 'Post Engagements Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_post_engagements_week',
      alias: 'Post Engagements Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_post_engagements_days_28',
      alias: 'Post Engagements Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_video_views_day',
      alias: 'Video Views Day',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_video_views_week',
      alias: 'Video Views Week',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'page_video_views_days_28',
      alias: 'Video Views Month',
      dataType: this.tableauDataTypeObject.int
    }, {
      id: 'created_at',
      alias: 'Created Time',
      dataType: this.tableauDataTypeObject.datetime
    }]
  }
}

export default PageImpressionColumns
