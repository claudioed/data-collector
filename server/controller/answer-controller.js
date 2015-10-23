/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */

var insertService = require('../service/insert-answer-service');

exports.insert = function (req, res, next) {
    var answer = req.body;
    insertService.insert(answer).then(function(success){
        res.send(201);
        return next();
    }).fail(function(failError){
        res.send(500);
        return next();
    });
};