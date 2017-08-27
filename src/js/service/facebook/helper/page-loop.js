
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

        return Promise.all(pageIds.map((id) => {
            return this.facebookRequests.getPages(id.page_id).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }

    getPageMetrics(pageIds)
    {
        let data = [];

        return Promise.all(pageIds.map((id) => {
            return this.facebookRequests.getPageMetrics(id.page_id).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }

    getPosts(pageIds)
    {
        let data = [];

        return Promise.all(pageIds.map((id) => {
            return this.facebookRequests.getPosts(id.page_id).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }

    getPostMetrics(pageIds)
    {
        let data = [];

        return Promise.all(pageIds.map((id) => {
            return this.facebookRequests.getPostMetrics(id.page_id).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }
}

export default FacebookPageLoop;
