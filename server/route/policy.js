const policyRoute = require("express").Router();
const {
  getPolicy,
  addPolicy,
  deletePolicy,
  updatePolicy,
  getDetailPolicy,
} = require("../controller/policyController");

policyRoute.get("/", getPolicy);
policyRoute.post("/add", addPolicy);
policyRoute.delete("/delete/:poli_id", deletePolicy);
policyRoute.put("/update/:poli_id", updatePolicy);
policyRoute.get("/details/:poli_id", getDetailPolicy);

module.exports = policyRoute;
