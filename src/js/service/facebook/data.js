
class FacebookData
{
    constructor(ajax)
    {
        this.ajax = ajax;

        this.data = [];
    }

    getDataPaginate(url)
    {
        return this.ajax.getData(url).then((result) => {
            
            this.data = this.data.concat(result.data);
             
            return result;
             
        }).then((result) => {
            if (typeof(result.paging.next) !== 'undefined' && result.paging.next.length) {
                return this.getDataPaginate(result.paging.next);        
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
}

export default FacebookData;
