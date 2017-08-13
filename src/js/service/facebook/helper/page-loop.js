
class FacebookPageLoop
{
    constructor(facebookRequests)
    {
        this.facebookRequests = facebookRequests;

        this.data = [];
    }

    getPagePosts(pageIds)
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

    getPageImpressions(pageIds)
    {
        let data = [];

        return Promise.all(pageIds.map((id) => {
            return this.facebookRequests.getPageImpressions(id.page_id).then((result) => {
                data.push(result);
            });
        })).then(() => {
            return data;
        });
    }
}

export default FacebookPageLoop;
