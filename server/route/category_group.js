const categoryRoute = require("express").Router();
const {
  getCategory,
  addCategory,
  deleteCategory,
  updateCategory,
  getDetailCategory,
  showImg,
} = require("../controller/categoryController");
const upload = require("../middleware/multer")

categoryRoute.get("/", getCategory);
categoryRoute.post("/add", upload.single("cagro_icon"), addCategory);
categoryRoute.delete("/delete/:cagro_id", deleteCategory);
categoryRoute.put(
  "/update/:cagro_id",
  upload.single("cagro_icon"),
  updateCategory
);
categoryRoute.get("/details/:cagro_id", getDetailCategory);
categoryRoute.get("/details/:img", showImg);

module.exports = categoryRoute;
