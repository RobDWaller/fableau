"use strict"

import DateTime from '../helper/date-time.js';

class Post
{
    constructor(data, pageId)
    {
        if (typeof data === 'undefined') {
            throw new Error('Data is not defined!!');
        }

        this.data = data;

        this.pageId = pageId;
    }

    getTableauData()
    {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            throw new Error('Data is not an array or is an empty!!');
        }

        return this.data.map((row) => {
            return {
                'page_id': row.id.split('_')[0],
                'post_id': row.id,
                'message': row.message,
                'created_at': this.convertDateToTableauDate(row.created_time)
            }
        });
    }

    convertDateToTableauDate(dateTimeString)
    {
        let date = new DateTime;

        return date.getTableauTimeString(dateTimeString);
    }
}

export default Post;
