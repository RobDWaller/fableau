"use strict"

class Dom
{
    getId(idName)
    {
        return document.getElementById(idName);
    }

    getClass(className)
    {
        return document.getElementsByClassName(className);
    }

    getTag(tagName)
    {
        return document.getElementsByTagName(tagName);   
    }

    addClass(idName, className)
    {
        this.getId(idName).classList.add(className);
    }

    removeClass(idName, className)
    {
        this.getId(idName).classList.remove(className);
    }

    createElement(element)
    {
        return document.createElement(element);
    }

    createText(text)
    {
        return document.createTextNode(text);
    }

    createFragment()
    {
        return document.createDocumentFragment();
    }
}

export default Dom;
