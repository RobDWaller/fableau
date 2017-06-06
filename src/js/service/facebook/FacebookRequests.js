"use strict"

class FacebookRequests
{
    constructor(ajax)
    {
        this.ajax = ajax;
    }

    getPosts()
    {
        return this.ajax.getData('https://jsonplaceholder.typicode.com/posts').then(function(result){
            return new Post(result);
        });
    }

    getUsers()
    {
        return this.ajax.getData('https://jsonplaceholder.typicode.com/users').then(function(result){
            return new User(result);
        });
    }
}

export default FacebookRequests;
