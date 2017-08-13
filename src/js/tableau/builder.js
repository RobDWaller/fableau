"use strict"

import Dom from '../helper/dom.js';
import Ajax from '../helper/ajax.js';
import FacebookPageLoop from '../service/facebook/helper/page-loop.js';
import FacebookRequests from '../service/facebook/requests.js';
import FacebookData from '../service/facebook/data.js';
import PostColumns from '../tableau/columns/posts.js';
import PageImpressionColumns from '../tableau/columns/page-impressions.js';
import Table from './table.js';

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

        var postTable = new Table('posts', 'Posts Meta Data', new PostColumns(this.tableau.dataTypeEnum));

        var pageImpressionsTable = new Table('page_impressions', 'Page Impressions', new PageImpressionColumns(this.tableau.dataTypeEnum));

        tableauConnector.getSchema = function(schemaCallback){
            schemaCallback([postTable.getTable(), pageImpressionsTable.getTable()]);
        };

        return tableauConnector;
    }

    getData(tableauConnector)
    {
        tableauConnector.getData = (table, doneCallback) => {

            let facebook = new FacebookRequests(new FacebookData(new Ajax()));
            facebook.setAccessToken(this.tableau.password);

            let facebookLoop = new FacebookPageLoop(facebook);

            let pageIds = JSON.parse(this.tableau.connectionData);

            facebook.getAccessTokenStatus().then((result) => {
                if (!result) {
                    this.tableau.abortForAuth('The Facebook Access Token has expired, please re-authenticate.');
                }
            });

            if (table.tableInfo.id == 'posts') {
                facebookLoop.getPagePosts(pageIds)
                .then((result) => {
                    return result.map((post) => {
                        table.appendRows(post.getTableauData());
                    });
                })
                .then(() => { doneCallback() });
            }

            if (table.tableInfo.id == 'page_impressions') {
                facebookLoop.getPageImpressions(pageIds)
                .then((result) => {
                    return result.map((page) => {
                        table.appendRows(page.getTableauData());
                    });
                })
                .then(() => { doneCallback() });
            }
        };

        return tableauConnector;
    }

    processResult(table, result, pageId = null)
    {
        table.appendRows(result.getTableauData(pageId));
    }

    registerConnector(tableauConnector)
    {
        this.tableau.registerConnector(tableauConnector);
    }

    setPassword(accessToken)
    {
        this.tableau.password = accessToken;
    }

    setConnectionData()
    {
        let dom = new Dom;

        let pages = dom.getClass('facebook-page-list__input');

        let pageIds = Array.prototype.filter.call(pages, (item) => {
            if (item.checked) {
                return item;
            }
        }).map((item) => {
            return {
                'page_id': item.value
            }
        });

        this.tableau.connectionData = JSON.stringify(pageIds);
    }
}

export default TableauBuilder;
