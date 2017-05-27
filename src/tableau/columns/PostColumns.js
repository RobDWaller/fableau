"use strict"

class PostColumns
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
            id: "title",
            alias: "facebook post title",
            dataType: this.tableau.dataTypeEnum.string
        }];
    }
}

export default PostColumns;
