'use strict'

/**
 * Removes the human readable messages from the webpage
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class MessageRemover {
  /**
   * @param Dom dom
   */
  constructor (dom) {
    this.dom = dom
  }

  /**
   * Remove the message from the web page
   *
   * @param Event event
   */
  remove (event) {
    if (event.target && event.target.matches('div.message__close')) {
      let elements = this.dom.getClass('message__close')

      Array.prototype.forEach.call(elements, (element) => {
        element.parentNode.parentNode.parentNode.removeChild(
          element.parentNode.parentNode
        )
      })
    }
  }
}

export default MessageRemover
