
class Page
{
    constructor(data)
    {
        if (typeof data === 'undefined') {
            throw new Error('Data is not defined!!');
        }

        this.data = data;
    }

    appendData(data)
    {
        this.data = this.data.concat(data);
    }

    getTableauData()
    {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            throw new Error('Data is not an array or is an empty!!');
        }

        return this.data.map(function(row) {
            return {
                'id': row.id,
                'title': row.title
            }
        });
    }
}

export default Page;
