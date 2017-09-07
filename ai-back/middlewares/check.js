/**
 * Created by hao on 7/9/17.
 */
module.exports = {
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', 'Please login');
            return res.redirect('/signin');
        }
        next();
    },

    checkNotLogin: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', 'logged');
            return res.redirect('back');
        }
        next();
    }
};