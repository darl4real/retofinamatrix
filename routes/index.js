var express = require('express');
const UploadService = require('../services/uploadService');
var router = express.Router();
let uploadService = new UploadService();
let upload = uploadService.up();
let ConvertCsvController = require('../controller/convertCsvController');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('file'), (req, res, next) => {
    let convertCsvController = new ConvertCsvController(req, res, next);
    convertCsvController.convertCsv();

});

router.get('/upload', upload.single('file'), (req, res, next) => {
    res.redirect('/')

});

module.exports = router;