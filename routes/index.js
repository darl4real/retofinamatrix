var express = require('express');
var router = express.Router();
const IndexController = require('../controller/web/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
    let indexController = new IndexController(req, res, next);
    indexController.view();
});

module.exports = router;