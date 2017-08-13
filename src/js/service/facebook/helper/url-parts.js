
class FacebookUrlParts
{
    getParts(url)
    {
        let result = {};

        let parts = this.splitUrl(url);

        result['url'] = parts[0];

        result['access_token'] = this.getPart(parts[1], 'access_token');

        result['expires_in'] = this.getPart(parts[1], 'expires_in');

        return result;
    }

    splitUrl(url)
    {
        return url.split('#');
    }

    getPart(partString, part)
    {
        let parts = partString.split('&');

        let result = parts.reduce((a, b) => {
            let parts = b.split('=');

            a[parts[0]] = parts[1];

            return a;
        }, {});

        return result[part];
    }
}

export default FacebookUrlParts;
