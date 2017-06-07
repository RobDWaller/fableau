 
class FacebookPageListBuilder
{
    constructor(dom, data)
    {
        this.dom = dom;

        this.data = data;
    }   

    build()
    {
        let ul = this.dom.createElement('ul');

        this.data.forEach((item) => {
            let li = this.dom.createElement('li');
            let text = this.dom.createTextNode(item.page_name);
            li.appendChild(text);
            ul.appendChild(li);
        });

        let pagesDiv = this.dom.getElementById('facebook-page-list');
        pagesDiv.appendChild(ul);
    }
}

export default FacebookPageListBuilder;
