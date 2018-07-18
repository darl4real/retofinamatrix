const Express = require('express');
const Router = Express.Router();
const UploadService = require('../services/uploadService');
let uploadService = new UploadService();
let upload = uploadService.up();


Router.get('/', (req, res, next) => {
    res.render('uploads', {
        title: 'Subida de archivos'
    });
});

Router.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.file);
    res.json(req.file.path);
})
module.exports = Router;