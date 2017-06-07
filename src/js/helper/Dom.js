"use strict"

class Dom
{
    getElementById(idName)
    {
        return document.getElementById(idName);
    }

    addClass(idName, className)
    {
        this.getElementById(idName).classList.add(className);
    }

    removeClass(idName, className)
    {
        this.getElementById(idName).classList.remove(className);
    }

    createElement(element)
    {
        return document.createElement(element);
    }

    createTextNode(text)
    {
        return document.createTextNode(text);
    }
}

export default Dom;
