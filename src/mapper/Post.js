"use strict"

class Post
{
    constructor(data)
    {
        this.data = data;
    }

    getTableauData()
    {
        return this.data.map(function(row) {
            return {
                'id': row.id,
                'title': row.title
            }
        });
    }
}

export default Post;
