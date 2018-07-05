"use strict"

import Dom from '../helper/dom.js';
import Ajax from '../helper/ajax.js';
import FacebookPageLoop from '../service/facebook/helper/page-loop.js';
import FacebookRequests from '../service/facebook/requests.js';
import FacebookData from '../service/facebook/data.js';
import PostColumns from '../tableau/columns/posts.js';
import PageColumns from '../tableau/columns/pages.js';
import PostMetricsColumns from '../tableau/columns/post-metrics.js';
import PageMetricsColumns from '../tableau/columns/page-metrics.js';
import TableFactory from './table-factory.js';

class TableauBuilder
{
    constructor(tableau, ajax)
    {
        this.tableau = tableau;

        this.ajax = ajax;
    }

    init()
    {
        this.tableau.authType = this.tableau.authTypeEnum.custom;
    }

    makeSchema()
    {
        var tableauConnector = this.tableau.makeConnector();

        var tableFactory = new TableFactory;

        tableauConnector.getSchema = (schemaCallback) => {
            schemaCallback([
                tableFactory.makeTable('posts', 'Posts Meta Data', new PostColumns(this.tableau.dataTypeEnum)).getTable(),
                tableFactory.makeTable('pages', 'Pages Meta Data', new PageColumns(this.tableau.dataTypeEnum)).getTable(),
                tableFactory.makeTable('post_metrics', 'Posts Metric Data', new PostMetricsColumns(this.tableau.dataTypeEnum)).getTable(),
                tableFactory.makeTable('page_metrics', 'Pages Metric Data', new PageMetricsColumns(this.tableau.dataTypeEnum)).getTable()
            ]);
        };

        return tableauConnector;
    }

    getData(tableauConnector)
    {
        tableauConnector.getData = (table, doneCallback) => {

            let facebook = new FacebookRequests(new FacebookData(new Ajax()));

            let facebookLoop = new FacebookPageLoop(facebook);

            let pageIds = JSON.parse(this.tableau.connectionData);

            // facebook.getAccessTokenStatus().then((result) => {
            //     if (!result) {
            //         this.tableau.abortForAuth('The Facebook Access Token has expired, please re-authenticate.');
            //     }
            // });

            if (table.tableInfo.id == 'posts') {
                facebookLoop.getPosts(pageIds)
                .then((result) => {
                    return result.map((post) => {
                        table.appendRows(post.getTableauData());
                    });
                })
                .then(() => { doneCallback() });
            }

            if (table.tableInfo.id == 'pages') {
                facebookLoop.getPages(pageIds)
                .then((result) => {
                    return result.map((page) => {
                        table.appendRows(page.getTableauData());
                    });
                })
                .then(() => { doneCallback() });
            }

            if (table.tableInfo.id == 'post_metrics') {
                facebookLoop.getPostMetrics(pageIds)
                .then((result) => {
                    return result.map((post) => {
                        table.appendRows(post.getTableauData());
                    });
                })
                .then(() => { doneCallback() });
            }

            if (table.tableInfo.id == 'page_metrics') {
                facebookLoop.getPageMetrics(pageIds)
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

    setPassword(password)
    {
        this.tableau.password = password;
    }

    setConnectionData(accessToken)
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

        let data = [];

        return Promise.all(pageIds.map((id) => {
            this.tableau.log('here');
            return this.ajax.getData(`https://graph.facebook.com/${id.page_id}?access_token=${accessToken}&fields=access_token`).then((result) => {
                data.push(result);
            });
        })).then(() => {
            this.tableau.log(data);
            this.tableau.connectionData = JSON.stringify(data);
            return;
        });
    }

    setConnectionName(connectionName)
    {
        this.tableau.connectionName = connectionName;
    }


    submit()
    {
        this.tableau.submit();
    }
}

export default TableauBuilder;
