/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';

module.exports = {
    url : connectionString
};
