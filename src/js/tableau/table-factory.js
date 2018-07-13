"use strict"

import Table from './table.js';

/**
 * Factory to generate new Table objects
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class TableFactory
{
    /**
     * Make a Table object
     *
     * @param string id
     * @param string alias
     * @param Object columns
     * @return Table
     */
    makeTable(id, alias, columns)
    {
        return new Table(id, alias, columns);
    }
}

export default TableFactory;
