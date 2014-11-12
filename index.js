var vow = require('vow'),
    requirejs = require('requirejs');

/**
 * собирает файлы используя almond
 * @param config - когфиг для require.js
 * @returns {Promise}
 */
module.exports = function (config) {
    var defer = vow.defer();
    requirejs.optimize(config,
        function () {
            defer.resolve();
        },
        function (err) {
            console.log(err);
        }
    );
    return defer.promise();
};