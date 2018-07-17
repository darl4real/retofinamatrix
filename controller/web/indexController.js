const Controller = require('../controller');

class indexController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    view() {
        this.res.render('index');
    }
}

module.exports = indexController;