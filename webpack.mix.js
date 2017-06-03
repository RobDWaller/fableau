let mix = require('laravel-mix').mix;

mix.js('./src/app.js', './public/assets/fableau.js')
    .js('./src/init.js', './public/assets/tableaubuilder.js')
    .copy('./node_modules/mocha/mocha.css', './public/assets/tests/mocha.css')
    .copy('./node_modules/mocha/mocha.js', './public/assets/tests/mocha.js')
    .copy('./node_modules/chai/chai.js', './public/assets/tests/chai.js')
    .js('./tests/PostTest.js', './public/assets/tests/tests.js');