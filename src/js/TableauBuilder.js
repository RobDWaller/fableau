"use strict"

import Ajax from './helper/Ajax.js';
import FacebookRequests from './service/facebook/FacebookRequests.js';
import FacebookData from './service/facebook/FacebookData.js';
import PostColumns from './tableau/columns/PostColumns.js';
import UserColumns from './tableau/columns/UserColumns.js';
import Table from './tableau/Table.js';

class TableauBuilder
{
    constructor(tableau)
    {
        this.tableau = tableau;
    }

    init()
    {
        this.tableau.authType = this.tableau.authTypeEnum.custom;
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
        tableauConnector.getData = (table, doneCallback) => {
            
            var facebook = new FacebookRequests(new FacebookData(new Ajax()), this.tableau.password);

            if (table.tableInfo.id == 'posts') {
                facebook.getPosts().then((result) => {
                    this.processResult(table, doneCallback, result)
                });    
            }

            if (table.tableInfo.id == 'users') {
                facebook.getUsers().then((result) => {
                    this.processResult(table, doneCallback, result)
                });    
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

    setPassword(accessToken)
    {
        this.tableau.password = accessToken;
    }
}

export default TableauBuilder;
