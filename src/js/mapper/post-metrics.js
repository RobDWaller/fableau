"use strict"

/**
 * Maps the post metrics data from Facebook to a Tableau friendly format
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class PostMetrics
{
    /**
     * @param array data
     */
    constructor(data)
    {
        if (typeof data === 'undefined') {
            throw new Error('Data is not defined!!');
        }

        this.data = data;
    }

    /**
     * Map the data to a Tableau format
     *
     * @return array
     */
    getTableauData()
    {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            throw new Error('Data is not an array or is an empty!!');
        }

        return this.data.map((row) => {
            return {
                'values': row.insights.data.map((value) => {
                    return {
                        'post_id': parseInt(row.id.split('_')[1]),
                        'page_id': parseInt(row.id.split('_')[0]),
                        'page_post_id': row.id,
                        [value.name]: value.values[0].value
                    }
                })
            }
        }).reduce((a, b) => {
            let values = b.values.reduce((aF, bF) => {
                let keys = Object.keys(bF);

                keys.map((key) => {
                    aF[key] = bF[key];
                });
                return aF;
            }, {});

            return a.concat(values);
        }, []);
    }
}

export default PostMetrics;
