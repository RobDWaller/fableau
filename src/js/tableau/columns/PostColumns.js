"use strict"

class PostColumns
{
    constructor(tableauDataTypeObject)
    {
        this.tableauDataTypeObject = tableauDataTypeObject;
    }

    getColumns()
    {
        return [{
            id: "page_id",
            alias: "facebook page id",
            dataType: this.tableauDataTypeObject.int
        },{
            id: "post_id",
            alias: "facebook post id",
            dataType: this.tableauDataTypeObject.string
        }, {
            id: "message",
            alias: "facebook post message",
            dataType: this.tableauDataTypeObject.string
        }, {
            id: "created_at",
            alias: "facebook post created time",
            dataType: this.tableauDataTypeObject.datetime
        }];
    }
}

export default PostColumns;
