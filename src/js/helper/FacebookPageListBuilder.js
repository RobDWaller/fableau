 
class FacebookPageListBuilder
{
    constructor(dom, data)
    {
        this.dom = dom;

        this.data = data;
    }   

    build()
    {
        let listFragment = this.dom.createFragment();

        this.data.forEach((item) => {
            let li = this.createItem();
            
            let input = this.createInput(item.page_id);
            
            let image = this.createImage(item.page_image);

            let text = this.dom.createText(item.page_name);
            
            li.appendChild(image);
            li.appendChild(input);
            li.appendChild(text);
            listFragment.appendChild(li);
        });

        let ul = this.dom.createElement('ul');
        ul.setAttribute('id', 'facebook_pages_list');
        ul.appendChild(listFragment);
        let pagesDiv = this.dom.getId('facebook-page-list');
        pagesDiv.appendChild(ul);
    }

    createItem()
    {
        let li = this.dom.createElement('li');
        li.classList.add('facebook-page-list__item');
        return li;
    }

    createInput(pageId)
    {
        let input = this.dom.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('value', pageId);
        input.classList.add('facebook-page-list__input');

        return input;
    }

    createImage(pageImage)
    {
        let image = this.dom.createElement('img');
        image.setAttribute('src', pageImage);
        image.classList.add('facebook-page-list__image');

        return image;
    }
}

export default FacebookPageListBuilder;
