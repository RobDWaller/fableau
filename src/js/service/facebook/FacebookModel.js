
import Page from '../../mapper/Page.js';
import Post from '../../mapper/Post.js';
import User from '../../mapper/User.js';

class FacebookModel
{
    constructor(ajax)
    {
        this.ajax = ajax;
    }

    getPages(url)
    {
        return this.ajax.getData(url).then((result) => {
            
            if (typeof(result.paging.previous) === 'undefined') {
                this.page = new Page(result.data);
            } else {
                this.page.appendData(result.data);
            }
             
            return result;
             
        }).then((result) => {
            if (typeof(result.paging.next) !== 'undefined' && result.paging.next.length) {
                return this.getPages(result.paging.next);        
            } else {
                return this.page;
            }
        });
    }

    getUsers()
    {
        return this.ajax.getData('https://jsonplaceholder.typicode.com/users').then(function(result){
            return new User(result);
        });
    }

    getPosts()
    {
        return this.ajax.getData('https://jsonplaceholder.typicode.com/posts').then(function(result){
            return new Post(result);
        });
    }
}

export default FacebookModel;
