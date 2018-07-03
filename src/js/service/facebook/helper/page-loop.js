
class FacebookPageLoop
{
    constructor(facebookRequests)
    {
        this.facebookRequests = facebookRequests;

        this.data = [];
    }

    getPages(pageIds)
    {
        let data = [];

        return Promise.all(pageIds.map((page) => {
            return this.facebookRequests.getPage(page).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }

    getPageMetrics(pageIds)
    {
        let data = [];

        return Promise.all(pageIds.map((page) => {
            return this.facebookRequests.getPageMetrics(page).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }

    getPosts(pageIds)
    {
        let data = [];

        console.log(pageIds);
        tableau.log(pageIds);

        return Promise.all(pageIds.map((page) => {
            return this.facebookRequests.getPosts(page).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }

    getPostMetrics(pageIds)
    {
        let data = [];

        return Promise.all(pageIds.map((page) => {
            return this.facebookRequests.getPostMetrics(page).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }
}

export default FacebookPageLoop;
