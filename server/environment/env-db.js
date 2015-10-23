/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@{POSTGRES_PORT_5432_TCP_ADDR}:${POSTGRES_PORT_5432_TCP_PORT}/postgres';

module.exports = {
    url : connectionString
};
