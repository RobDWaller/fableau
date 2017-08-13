
import Dom from './Dom.js';

class Message
{
    constructor(message)
    {
        this.message = message;

        this.dom = new Dom;
    }

    make()
    {
        this.divHolder = this.dom.createElement('div');
        this.divHolder.classList.add('message');

        this.divText = this.dom.createElement('div');
        this.divText.classList.add('message__text_holder');

        this.divClose = this.dom.createElement('div');
        this.divClose.classList.add('message__close');

        this.closeText = this.dom.createText('X');

        this.pText = this.dom.createElement('p');
        this.pText.classList.add('message__text');

        this.text = this.dom.createText(`! ${this.message}`);

        this.pText.appendChild(this.text);
        this.divClose.appendChild(this.closeText);

        this.divText.appendChild(this.pText);
        this.divText.appendChild(this.divClose);

        this.divHolder.appendChild(this.divText);

        return this;
    }

    render()
    {
        let holder = this.dom.getId('holder');
        holder.insertBefore(this.divHolder, holder.firstChild);
    }
}

export default Message;
