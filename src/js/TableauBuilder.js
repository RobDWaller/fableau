"use strict"

import Post from './mapper/Post.js';
import User from './mapper/User.js';
import Ajax from './helper/Ajax.js';
import FacebookRequests from './service/facebook/FacebookRequests.js';
import PostColumns from './tableau/columns/PostColumns.js';
import UserColumns from './tableau/columns/UserColumns.js';
import Table from './tableau/Table.js';

class TableauBuilder
{
    constructor(tableau)
    {
        this.tableau = tableau;
    }

    makeSchema()
    {
        var tableauConnector = this.tableau.makeConnector();

        var postTable = new Table('posts', 'Posts Data', new PostColumns(this.tableau.dataTypeEnum));

        var userTable = new Table('users', 'User Data', new UserColumns(this.tableau.dataTypeEnum));

        tableauConnector.getSchema = function(schemaCallback){
            schemaCallback([postTable.getTable(), userTable.getTable()]);
        };

        return tableauConnector;
    }

    getData(tableauConnector)
    {
        var facebook = new FacebookRequests(new Ajax());

        tableauConnector.getData = function(table, doneCallback) {
            
            if (table.tableInfo.id == 'posts') {
                facebook.getPosts().then((result) => this.processResult(table, doneCallback, result));    
            }

            if (table.tableInfo.id == 'users') {
                facebook.getUsers().then((result) => this.processResult(table, doneCallback, result));    
            }
        };

        return tableauConnector;
    }
        
    processResult(table, doneCallback, result)
    {
        table.appendRows(result.getTableauData()); 
        doneCallback();
    }

    registerConnector(tableauConnector)
    {
        this.tableau.registerConnector(tableauConnector);
    }

}

export default TableauBuilder;
