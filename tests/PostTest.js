import Post from '../src/mapper/Post.js';

var assert = chai.assert;

describe('Post', function() {
    it('Should return id and title', function() {

        var post = new Post([{"id": 3, "title": "Hello World"}]);

        assert.equal(post[0].id, 3);
    });
});