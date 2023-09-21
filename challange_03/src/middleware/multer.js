const multer = require('multer');
const path = require('path');

const directoryImages = path.join(__dirname, '../../public');
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, directoryImages);
    },

    filename : (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 100);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({storage : storage});

module.exports = upload;