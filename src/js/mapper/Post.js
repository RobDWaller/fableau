"use strict"

class Post
{
    constructor(data)
    {
        if (typeof data === 'undefined') {
            throw new Error('Data is not defined!!');
        }

        this.data = data;
    }

    getTableauData()
    {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            throw new Error('Data is not an array or is an empty!!');
        }

        return this.data.map(function(row) {
            return {
                'id': row.id,
                'title': row.title
            }
        });
    }
}

export default Post;
