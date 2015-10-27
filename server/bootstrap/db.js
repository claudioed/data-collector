/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */
var pg = require('pg');
var dbSettings = require('../environment/env-db');

if(process.env.POSTGRES_PORT_5432_TCP_ADDR && process.env.POSTGRES_PORT_5432_TCP_PORT){
    var client = new pg.Client(dbSettings.url);
    client.connect();
    var query = client.query('CREATE TABLE answer(data json)');
    query.on('end', function () {
        client.end();
    });
}