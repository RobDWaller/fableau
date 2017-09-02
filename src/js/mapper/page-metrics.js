"use strict"

import DateTime from '../helper/date-time.js';

class PageMetrics
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

        let data = this.data.reduce((a, b) => {
            b.values.map((value) => {
                let c = {
                    'page_id': parseInt(b.id.split('/')[0]),
                    [b.name + '_' + b.period]: value.value,
                    'created_at': this.convertDateToTableauDate(value.end_time)
                }

                a.push(c);
            });

            return a;
        }, []).reduce((a, b) => {

            if (typeof(a[b.created_at]) === 'undefined') {
                a[b.created_at] = b;

                return a;
            }

            a[b.created_at] = Object.assign(a[b.created_at], b);

            return a;

        }, {});

        return Object.keys(data).map(key => {
            return data[key];
        });

    }

    convertDateToTableauDate(dateTimeString)
    {
        let date = new DateTime;

        return date.getTableauTimeString(dateTimeString);
    }
}

export default PageMetrics;
