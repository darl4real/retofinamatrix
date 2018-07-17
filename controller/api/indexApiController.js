const Controller = require('../controller');
class indexApiController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }

    petition() {
        this.res.json("Peticion");
    }

}

module.exports = indexApiController;