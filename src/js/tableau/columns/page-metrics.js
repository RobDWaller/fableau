"use strict"

class PageImpressionColumns
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
            id: "page_impressions_day",
            alias: "facebook page impressions last day",
            dataType: this.tableauDataTypeObject.int
        }, {
            id: "page_impressions_week",
            alias: "facebook page impressions last week",
            dataType: this.tableauDataTypeObject.int
        }, {
            id: "page_impressions_month",
            alias: "facebook page impressions last month",
            dataType: this.tableauDataTypeObject.int
        }];
    }
}

export default PageImpressionColumns;
