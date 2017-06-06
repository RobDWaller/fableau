"use strict"

class Dom
{
    addClass(idName, className)
    {
        document.getElementById(idName).classList.add(className);
    }

    removeClass(idName, className)
    {
        document.getElementById(idName).classList.remove(className);
    }
}

export default Dom;
