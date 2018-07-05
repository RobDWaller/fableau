"use strict"

/**
 * A Table object that contains all the info to generate a Tableau table.
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class Table
{
    /**
     * @param string id
     * @param string alias
     * @param Object colums
     */
    constructor(id, alias, columns)
    {
        this.id = id;
        this.alias = alias;
        this.columns = columns.getColumns();
    }

    /**
     * Return a table object.
     *
     * @return Object
     * @todo this probably doesn't make sense.
     */
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
