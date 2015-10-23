/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */
var INSERT_SQL = 'INSERT INTO answer values ($1::JSON)';
var pg = require('pg');
var dbSettings = require('../environment/env-db');
var client = new pg.Client(dbSettings.url);
var q = require('q');

/**
 * this function persist json in database
 */
exports.insert = function (answer) {
    var deferred = q.defer();
    var values = [answer];
    client.connect();
    var query = client.query(INSERT_SQL, values, function (err, info) {
        if (err) {
            console.log('Error on insert answers');
            deferred.reject('Error on insert answers');
        } else {
            deferred.resolve(info);
        }
    });
    query.on('end', function () {
        client.end();
    });
    return deferred.promise;
};
