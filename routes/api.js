const Express = require('express');
const Router = Express.Router();
const IndexApiController = require('../controller/api/indexApiController');

//Route API
Router.get('/', (req, res, next) => {
    let indexApiController = new IndexApiController(req, res, next)
    indexApiController.petition();
});


module.exports = Router;