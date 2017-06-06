"use strict"

class UserColumns
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
            id: "username",
            alias: "facebook username",
            dataType: this.tableauDataTypeObject.string
        }];
    }
}

export default UserColumns;
