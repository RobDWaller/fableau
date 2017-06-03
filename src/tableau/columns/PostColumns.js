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
            id: "id",
            dataType: this.tableauDataTypeObject.int
        }, {
            id: "title",
            alias: "facebook post title",
            dataType: this.tableauDataTypeObject.string
        }];
    }
}

export default PostColumns;
