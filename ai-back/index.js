/**
 * Created by hao on 7/9/17.
 */
var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite')(__dirname);
var bodyParser = require('body-parser');
var routes = require('./routes');
var pkg = require('./package');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    name: config.session.key,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: config.session.maxAge
    },
    store: new MongoStore({
        url: config.mongodb
    })
}));

app.use(flash());

app.locals.blog = {

};

app.use(function (req, res, next) {
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


routes(app);

app.listen(config.port, function () {
    console.log(`${pkg.name} listening on port ${config.port}`);
});