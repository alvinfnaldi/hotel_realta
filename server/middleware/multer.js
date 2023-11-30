const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/master/catimage");
  },
  filename: function (req, file, cb) {
    const configsufix = Math.round(Math.random() * 1e9);
    const ext = file.originalname.split(".").pop();
    cb(null, `${file.fieldname}${configsufix}.${ext}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
