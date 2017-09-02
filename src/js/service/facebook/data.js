
class FacebookData
{
    constructor(ajax)
    {
        this.ajax = ajax;

        this.data = [];
    }

    getDataPaginate(url, direction = 'next', hasLimit = false, count = 0, limit = 3)
    {
        return this.ajax.getData(url).then((result) => {

            this.data = this.data.concat(result.data);

            return result;

        }).then((result) => {
            if (typeof(result.paging[direction]) !== 'undefined' && result.paging[direction].length && this.hasNotReachedLimit(hasLimit, count, limit)) {
                count++;
                return this.getDataPaginate(result.paging[direction], direction, hasLimit, count, limit);
            } else {
                return this.data;
            }
        });
    }

    getData(url)
    {
        return this.ajax.getData(url).then((result) => {
            if (typeof(result.data) === 'undefined') {
                return result;
            }

            return result.data;
        });
    }

    hasNotReachedLimit(hasLimit, count, limit)
    {
        if (!hasLimit) {
            return true;
        }

        if (count >= limit) {
            return false;
        }

        return true;
    }
}

export default FacebookData;
