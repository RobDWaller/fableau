import Page from '../src/js/mapper/Page.js';

var assert = chai.assert;

describe('Page', function() {
    it('Should apend data to data array', function() {
        var page = new Page([{"id": 3, "title": "Hello World"}]);

        page.appendData([{"id": 4, "title": "Foo Bar"}]);

        var result = page.getTableauData();

        assert.equal(result[0].id, 3);
        assert.equal(result[0].title, 'Hello World');

        assert.equal(result[1].id, 4);
        assert.equal(result[1].title, 'Foo Bar');
    });
});