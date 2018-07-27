const Multer = require('multer');

class uploadService {
    constructor() {
        this.storage = Multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "public/uploads");
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
    }

    up() {
        let storage = this.storage;
        console.log(JSON.stringify(storage));
        var upload = Multer({ storage });
        return upload;
    }

};

module.exports = uploadService;