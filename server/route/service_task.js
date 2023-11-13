const serviceTaskRoute = require("express").Router();
const {
  getService,
  addService,
  deleteService,
  updateService,
  getDetailService,
} = require("../controller/serviceTaskController");

serviceTaskRoute.get("/", getService);
serviceTaskRoute.post("/add", addService);
serviceTaskRoute.delete("/delete/:seta_id", deleteService);
serviceTaskRoute.put("/update/:seta_id", updateService);
serviceTaskRoute.get("/details/:seta_id", getDetailService);

module.exports = serviceTaskRoute;
