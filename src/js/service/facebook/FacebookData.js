
class FacebookData
{
    constructor(ajax)
    {
        this.ajax = ajax;

        this.data = [];
    }

    getData(url)
    {
        return this.ajax.getData(url).then((result) => {
            
            this.data = this.data.concat(result.data);
             
            return result;
             
        }).then((result) => {
            if (typeof(result.paging.next) !== 'undefined' && result.paging.next.length) {
                return this.getData(result.paging.next);        
            } else {
                return this.data;
            }
        });
    }
}

export default FacebookData;
