"use strict"

class PageColumns
{
    constructor(tableauDataTypeObject)
    {
        this.tableauDataTypeObject = tableauDataTypeObject;
    }

    getColumns()
    {
        return [{
            id: "page_id",
            alias: "Page ID",
            dataType: this.tableauDataTypeObject.int
        },{
            id: "page_name",
            alias: "Name",
            dataType: this.tableauDataTypeObject.string
        }, {
            id: "page_category",
            alias: "Category",
            dataType: this.tableauDataTypeObject.string
        }, {
            id: "page_image",
            alias: "Picture",
            dataType: this.tableauDataTypeObject.string
        }, {
            id: "page_about",
            alias: "About",
            dataType: this.tableauDataTypeObject.string
        }, {
            id: "page_link",
            alias: "Link",
            dataType: this.tableauDataTypeObject.string
        }];
    }
}

export default PageColumns;
