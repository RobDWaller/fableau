console.log('Fableau currently running in ' + process.env.ENVIRONMENT);

let mix = require('laravel-mix').mix;

if (process.env.ENVIRONMENT === 'development') {
    mix.js('./src/js/init.js', './public/assets/fableau.js')
        .sass('./src/scss/main.scss', './public/assets/style.css')
        .copy('./node_modules/mocha/mocha.css', './public/assets/tests/mocha.css')
        .copy('./node_modules/mocha/mocha.js', './public/assets/tests/mocha.js')
        .copy('./node_modules/chai/chai.js', './public/assets/tests/chai.js')
        .copy('./tests/tests.html', './public/tests.html')
        .js('./tests/PostTest.js', './public/assets/tests/tests.js');
}

if (process.env.ENVIRONMENT === 'production') {
    mix.js('./src/js/init.js', './public/assets/fableau.js');
}
