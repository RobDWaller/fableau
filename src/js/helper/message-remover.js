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
    if (event.target && this.matches(event, 'div.message__close')) {
      let elements = this.dom.getClass('message__close')

      Array.prototype.forEach.call(elements, (element) => {
        element.parentNode.parentNode.parentNode.removeChild(
          element.parentNode.parentNode
        )
      })
    }
  }

  /**
   * This is a pollyfill for event.target to work with Tableau Desktop which
   * seems to use an old version of IE as its client.
   *
   * @param Event event
   * @param string elementString
   * @return bool
   */
  matches (event, elementString) {
    if (!event.target.matches) {
        return (event.srcElement.type + '.' + event.srcElement.className) === elementString
    }

    return event.target.matches(elementString)
  }
}

export default MessageRemover
