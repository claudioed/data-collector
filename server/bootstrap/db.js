/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */
var pg = require('pg');
var dbSettings = require('../environment/env-db');

var client = new pg.Client(dbSettings.url);
client.connect();
var query = client.query('CREATE TABLE answers(data json)');
query.on('end', function () {
    client.end();
});

