/**
 * Created by Claudio E. de Oliveira on 22/10/15.
 */

exports.healthCheck = function(req,res,next){
    res.send(200,{status : 'OK'});
    return next();
};