"use strict"

class UserColumns
{
    constructor(tableau)
    {
        this.tableau = tableau;
    }

    getColumns()
    {
        return [{
            id: "id",
            dataType: this.tableau.dataTypeEnum.string
        }, {
            id: "username",
            alias: "facebook username",
            dataType: this.tableau.dataTypeEnum.string
        }];
    }
}

export default UserColumns;
