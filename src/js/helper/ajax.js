"use strict"

/**
 * Simple wrapper for making Ajax requests
 *
 * @author Rob Waller <rdwaller1984@googlemail.com>
 */
class Ajax
{
    /**
     * Make an AJAX request based on a URL string
     *
     * @param string url
     * @return Promise
     */
    getData(url)
    {
        let data = new Promise((resolve, reject) =>{

            var request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE ) {
                    if (request.status == 200) {
                        resolve(request.responseText);
                    }
                    else if (request.status == 400) {
                        reject(request);
                    }

                    reject(request);
                }
            };

            request.open('GET', url, true);
            request.send();

        });

        return data.then(function(result){
            return JSON.parse(result);
        });
    }
}

export default Ajax;
