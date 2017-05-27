"use strict"

class Table
{
    constructor(id, alias, columns)
    {
        this.id = id;
        this.alias = alias;
        this.columns = columns.getColumns();
    }

    getTable()
    {
        return {
            id: this.id,
            alias: this.alias,
            columns: this.columns
        };
    }
}

export default Table;
