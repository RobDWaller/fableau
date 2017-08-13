
class MessageRemover
{
    constructor(dom)
    {   
        this.dom = dom;
    }

    remove(event)
    {
        if (event.target && event.target.matches("div.message__close")) {
            let elements = this.dom.getClass("message__close");
            
            Array.prototype.forEach.call(elements, (element) => {
                element.parentNode.parentNode.parentNode.removeChild(
                    element.parentNode.parentNode
                );
            });
        }
    }
}

export default MessageRemover;
