/**
 * Created by hao on 7/9/17.
 */

var express = require('express');
var router = express.Router();

var robotPose = {
    x: 10,
    y: 10,
}

var goal = {
    x: -1000,
    y: -1000
}

router.get('/', function(req, res, next) {
    res.json(robotPose);
});

router.post('/', function (req, res, next) {
    if (req.body) {
        robotPose.x = req.body.x;
        robotPose.y = req.body.y;
        res.send('success');
    }else {
        res.send('fail');
    }
});

router.get('/goal', function (req, res, next) {
    if (goal.x !== -1000 && goal.y !== -1000) {
        setTimeout(function(){goal.x = -1000; goal.y = -1000},5000);
        res.json(goal);
    }else {
        res.json(goal)
    }
});

router.post('/goal', function (req, res, next) {
    if (req.body) {
        goal.x = req.body.x;
        goal.y = req.body.y;
        res.send('success')
    }else {
        res.send('fail')
    }
});

module.exports = router;
