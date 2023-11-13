const categoryRoute = require("express").Router();
const {
  getCategory,
  addCategory,
  deleteCategory,
  updateCategory,
  getDetailCategory,
} = require("../controller/categoryController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const configsufix = Math.round(Math.random() * 1e9);
    const ext = file.originalname.split(".").pop();
    cb(null, file.fieldname + configsufix + "." + ext);
  },
});

const upload = multer({ storage: storage });

categoryRoute.get("/", getCategory);
categoryRoute.post("/add", upload.single("cagro_icon"), addCategory);
categoryRoute.delete("/delete/:cagro_id", deleteCategory);
categoryRoute.put(
  "/update/:cagro_id",
  upload.single("cagro_icon"),
  updateCategory
);
categoryRoute.get("/details/:cagro_id", getDetailCategory);

module.exports = categoryRoute;
