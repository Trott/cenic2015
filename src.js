var amalgamatic = require('amalgamatic');
var cenic2015 = require('amalgamatic-cenic2015');

amalgamatic.add('cenic2015', cenic2015);

var callback = function (err, results) {
    if (err) {
        return console.log(err);
    }

    console.log(JSON.stringify(results));
};

amalgamatic.search({}, callback);