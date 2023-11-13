const route = require("express").Router();

const locationRoutes = require("./locations");
const policyRoutes = require("./policy");
const categoryGroupRoutes = require("./category_group");
const priceItems = require("./price_items");
const serviceTask = require("./service_task");
const memberRoutes = require("./members");

route.use("/locations", locationRoutes);
route.use("/policy", policyRoutes);
route.use("/category", categoryGroupRoutes);
route.use("/priceitems", priceItems);
route.use("/servicetasks", serviceTask);
route.use("/members", memberRoutes);

module.exports = route;
