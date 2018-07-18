'use strict'

/**
 * Simple class that adds the Facebook page details to the web page
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class FacebookPageListBuilder {
  /**
     * @param Object dom
     * @param array data
     */
  constructor (dom, data) {
    this.dom = dom

    this.data = data
  }

  /**
     * Build the Facebook Page list and add it to the web page
     */
  build () {
    let listFragment = this.dom.createFragment()

    this.data.forEach((item) => {
      let li = this.createItem()

      let input = this.createInput(item.page_id)

      let image = this.createImage(item.page_image)

      let text = this.dom.createText(item.page_name)

      li.appendChild(image)
      li.appendChild(input)
      li.appendChild(text)
      listFragment.appendChild(li)
    })

    let ul = this.dom.createElement('ul')
    ul.setAttribute('id', 'facebook_pages_list')
    ul.appendChild(listFragment)
    let pagesDiv = this.dom.getId('facebook-page-list')
    pagesDiv.appendChild(ul)
  }

  /**
     * Create a single list item
     *
     * @return Element
     */
  createItem () {
    let li = this.dom.createElement('li')
    li.classList.add('facebook-page-list__item')
    return li
  }

  /**
     * Create a check box for the page item
     *
     * @param int pageId
     * @return Element
     */
  createInput (pageId) {
    let input = this.dom.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('value', pageId)
    input.classList.add('facebook-page-list__input')

    return input
  }

  /**
     * Create the page image
     *
     * @param string pageImage
     * @return Element
     */
  createImage (pageImage) {
    let image = this.dom.createElement('img')
    image.setAttribute('src', pageImage)
    image.classList.add('facebook-page-list__image')

    return image
  }
}

export default FacebookPageListBuilder
