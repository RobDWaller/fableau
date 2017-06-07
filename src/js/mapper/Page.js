
class Page
{
    constructor(data)
    {
        if (typeof data === 'undefined') {
            throw new Error('Data is not defined!!');
        }

        this.data = data;
    }

    getTableauData()
    {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            throw new Error('Data is not an array or is an empty!!');
        }

        return this.data.map(function(row) {
            return {
                'page_id': row.id,
                'page_name': row.name,
                'page_category': row.category,
                'page_image': `https://graph.facebook.com/${row.id}/picture`
            }
        });
    }
}

export default Page;
