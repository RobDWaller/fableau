'use strict'

/**
 * A simple facade for some basic JavaScript DOM functionality.
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 * @todo it might be sensible to inject the JavaScript document
 */
class Dom {
  /**
     * Get an element via the element id
     *
     * @param string idName
     * @return Element
     */
  getId (idName) {
    return document.getElementById(idName)
  }

  /**
     * Get a list of elements by class name
     *
     * @param string className
     * @return NodeList
     */
  getClass (className) {
    return document.getElementsByClassName(className)
  }

  /**
     * Get a list of elements by the tag name
     *
     * @param string tagName
     * @return NodeList
     */
  getTag (tagName) {
    return document.getElementsByTagName(tagName)
  }

  /**
     *  Add a class to an element based on the element id
     *
     * @param string idName
     * @param string className
     */
  addClass (idName, className) {
    this.getId(idName).classList.add(className)
  }

  /**
     * Remove a class from an element based on the element's id
     *
     * @param string idName
     * @param string className
     */
  removeClass (idName, className) {
    this.getId(idName).classList.remove(className)
  }

  /**
     * Create a new element
     *
     * @param string element
     * @return Element
     */
  createElement (element) {
    return document.createElement(element)
  }

  /**
     * Create a text node
     *
     * @param string text
     * @return Text
     */
  createText (text) {
    return document.createTextNode(text)
  }

  /**
     * Create a document fragment, this stop page reflow.
     *
     * @return DocumentFragment
     */
  createFragment () {
    return document.createDocumentFragment()
  }
}

export default Dom
