'use strict'

/**
 * Simple DateTime wrapper for generating and manipulating Date objects
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class DateTime {
  /**
   * Get a new Date object
   *
   * @return Date
   */
  getDate () {
    return new Date()
  }

  /**
   * Get a timestamp in milliseconds
   *
   * @return int
   */
  now () {
    return Date.now()
  }

  /**
   * Get the unix timestamp integer
   *
   * @return int
   */
  getUnixTimestamp () {
    return Math.floor(this.now() / 1000)
  }

  /**
   * Get the current date as a unix timestamp and minus the number of days requested
   *
   * @param int days
   * @return int
   */
  getUnixTimestampMinusDays (days) {
    return this.getUnixTimestamp() - this.convertDaysToSeconds(days)
  }

  /**
   * Convert a number of days count to number of seconds
   *
   * @param int days
   * @return int
   */
  convertDaysToSeconds (days) {
    return days * (3600 * 24)
  }

  /**
   * Return a date timestamp string, this is specific to the way Facebook
   * returns date timestamp strings from their API.
   *
   * @param string dateString
   * @return string
   * @todo possibly not the best place for this.
   */
  getTableauTimeString (dateString) {
    let dateParts = dateString.split('T')

    let timeParts = dateParts[1].split('+')

    return `${dateParts[0]} ${timeParts[0]}`
  }
}

export default DateTime
