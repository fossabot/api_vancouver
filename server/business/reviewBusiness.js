var factory = require("./../factory/dbfactory");

var ReviewBusiness = (function() {

    var ReviewBusiness = function() {

    };

    ReviewBusiness.prototype.save = function(reviewModel, callback) {

        var connection = factory.getConnection();
        connection.connect();

        var sql = "";

        sql = sql + " INSERT INTO class_review (cre_stars, cre_review, cre_added_date, cre_status, use_id, cla_id, cor_id, cre_feedback_instructor, cre_feedback_cotuto_instructor, cre_feedback_cotuto_improve) ";
        sql = sql + " VALUES( ";
        sql = sql + "  " + reviewModel.cre_stars + " , ";
        sql = sql + "  '" + reviewModel.cre_review + "' , ";
        sql = sql + "  now() , ";
        sql = sql + "  'A' , ";
        sql = sql + "  " + reviewModel.use_id + " , ";
        sql = sql + "  " + reviewModel.cla_id + " , ";
        sql = sql + "  " + reviewModel.cor_id + " , ";
        sql = sql + "  '" + reviewModel.cre_feedback_instructor + "' , ";
        sql = sql + "  '" + reviewModel.cre_feedback_cotuto_instructor + "' , ";
        sql = sql + "  ' " + reviewModel.cre_feedback_cotuto_improve + "'   ";
        sql = sql + " ) ";



        connection.query(sql,function(err,reviewObj){
            connection.end();
            if(!err) {

                callback(reviewObj);
            }
        });

        connection.on('error', function(err) {
            connection.end();
            callback({"code" : 100, "status" : "database error"});
        });


    };

    return new ReviewBusiness();
})();

module.exports = ReviewBusiness;