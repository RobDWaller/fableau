"use strict"

import Post from './mapper/Post.js';
import User from './mapper/User.js';
import Ajax from './helper/Ajax.js';
import Facebook from './service/Facebook.js';
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
        var ajax = new Ajax();

        tableauConnector.getData = function(table, doneCallback) {
            
            if (table.tableInfo.id == 'posts') {
                ajax.getData('https://jsonplaceholder.typicode.com/posts').then(function(result){
                    return new Post(result);
                }).then(function(result){
                    table.appendRows(result.getTableauData()); 
                    doneCallback();
                });    
            }

            if (table.tableInfo.id == 'users') {
                ajax.getData('https://jsonplaceholder.typicode.com/users').then(function(result){
                    return new User(result);
                }).then(function(result){
                    table.appendRows(result.getTableauData()); 
                    doneCallback();
                });    
            }
        };

        return tableauConnector;
    }
        
    registerConnector(tableauConnector)
    {
        this.tableau.registerConnector(tableauConnector);
    }

}

export default TableauBuilder;
