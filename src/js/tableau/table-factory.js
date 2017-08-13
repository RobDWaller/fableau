"use strict"

import Table from './table.js';

class TableFactory
{
    makeTable(name, alias, columns)
    {
        return new Table(name, alias, colums);
    }
}

export default TableFactory;
