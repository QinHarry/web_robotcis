/**
 * Created by hao on 7/9/17.
 */

module.exports = function (app) {
    app.get('/', function (req, res) {
       res.redirect('/robot');
    });
    app.use('/robot', require('./robot'));
};
