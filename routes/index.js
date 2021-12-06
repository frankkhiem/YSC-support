var express = require('express');
var router = express.Router();

const todoRoute = require("./todo.route");
const taskRoute = require("./task.route");
const googleRoute = require("./google.route");
const zaloRoute = require('./zalo.route');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/todo", todoRoute);
router.use("/task", taskRoute);
router.use('/google-callback', googleRoute);
router.use('/zalo-callback', zaloRoute);

module.exports = router;
