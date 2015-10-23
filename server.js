/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */

var restify = require('restify');
var answerController = require('./server/controller/answer-controller');
var healthCheckController = require('./server/controller/health-check-controller');

var server = restify.createServer({
    name: 'data-collector',
    version: '1.0.0'
});

// Parametrize server
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Up the Server
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, JSON.stringify(server.address()));
});

/**
 *  Receive data  
 */
server.post('/api/answer', answerController.insert);

/**
 *  Health Check
 */
server.get('/api/healthCheck',healthCheckController.healthCheck);

