/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */

var host = process.env.POSTGRES_PORT_5432_TCP_ADDR || '127.0.0.1';
var port = process.env.POSTGRES_PORT_5432_TCP_PORT || 5432;
var user = process.env.POSTGRES_USER || 'postgres';
var pass = process.env.POSTGRES_PASSWORD || 'postgres';

var connectionString = 'postgres://' + user + ':' + pass+ '@' + host + ':' + port + '/postgres';

module.exports = {
    url: connectionString
};
