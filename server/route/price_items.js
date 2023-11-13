const priceItemsRoute = require("express").Router();
const {
  getPrice,
  addPrice,
  deletePrice,
  updatePrice,
  getDetailPrice,
} = require("../controller/priceItemController");

priceItemsRoute.get("/", getPrice);
priceItemsRoute.post("/add", addPrice);
priceItemsRoute.delete("/delete/:prit_id", deletePrice);
priceItemsRoute.put("/update/:prit_id", updatePrice);
priceItemsRoute.get("/details/:prit_id", getDetailPrice);

module.exports = priceItemsRoute;
