
class PageImpression
{
    constructor(data)
    {
        if (typeof data === 'undefined') {
            throw new Error('Data is not defined!!');
        }

        this.data = data;

        this.impressions = {
            'page_id': null,
            'page_impressions_day': null,
            'page_impressions_week': null,
            'page_impressions_month': null
        };
    }

    getTableauData()
    {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            throw new Error('Data is not an array or is an empty!!');
        }

        this.data.map((row) => {
            this.setPageId(row);
            this.setImpressionsDay(row);
            this.setImpressionsWeek(row);
            this.setImpressionsMonth(row);
        });

        return [this.impressions];
    }

    setPageId(row) 
    {
        if (this.impressions.page_id === null) {
            this.impressions.page_id = row.id.split('/')[0];
        }
    }

    setImpressionsDay(row)
    {
        if (row.title === 'Daily Total Impressions') {
            this.impressions.page_impressions_day = row.values[1].value;
        }
    }

    setImpressionsWeek(row)
    {
        if (row.title === 'Weekly Total Impressions') {
            this.impressions.page_impressions_week = row.values[1].value;
        }   
    }

    setImpressionsMonth(row)
    {
        if (row.title === '28 Days Total Impressions') {
            this.impressions.page_impressions_month = row.values[1].value;
        }
    }
}

export default PageImpression;
