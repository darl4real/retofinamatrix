const Express = require('express');
const Router = Express.Router();
const UploadService = require('../services/uploadService');
let uploadService = new UploadService();
let upload = uploadService.up();
//const CsvToService = require('../services/convertCsvToJson');


Router.get('/', (req, res, next) => {
    res.render('uploads', {
        title: 'Subida de archivos'
    });
});

/*Router.post('/upload', upload.single('file'), (req, res, next) => {
   let csvToService = new CsvToService();
    csvToService.convert(req.file.path);
    res.json(req.file.path);
    //.then((csvRow)=>{ 

res.json(data)
});
//})//*/
module.exports = Router;