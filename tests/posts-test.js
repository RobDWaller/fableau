import Post from '../src/js/mapper/post-meta.js';

var assert = chai.assert;

describe('Post', function() {
    it('Should return id and title', function() {
        var post = new Post([{"id": 3, "title": "Hello World"}]).getTableauData();

        assert.equal(post[0].id, 3);
        assert.equal(post[0].title, 'Hello World');
    });

    it('Should throw an exception at Post', function() {
        chai.expect(() => new Post).to.throw(Error, 'defined');
    });

    it('Should throw an exception at getTableauData not array', function() {
        var post = new Post({});

        chai.expect(() => post.getTableauData()).to.throw(Error, 'array');
    });

    it('Should throw an exception at getTableauData empty array', function() {
        var post = new Post([]);

        chai.expect(() => post.getTableauData()).to.throw(Error, 'array');
    });
});
