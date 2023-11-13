const locationRoute = require("express").Router();
const {
  getRegion,
  addRegion,
  deleteRegion,
  updateRegion,
  getDetailRegion,
  getCountry,
  addCountry,
  deleteCountry,
  updateCountry,
  getDetailCountry,
  getProvince,
  addProvince,
  deleteProvince,
  updateProvince,
  getDetailProvince,
  getCity,
  addCity,
  deleteCity,
  updateCity,
  getDetailCity,
} = require("../controller/locationController");

// regions
locationRoute.get("/regions/", getRegion);
locationRoute.post("/regions/add", addRegion);
locationRoute.delete("/regions/delete/:region_code", deleteRegion);
locationRoute.put("/regions/update/:region_code", updateRegion);
locationRoute.get("/regions/details/:region_code", getDetailRegion);

// countries
locationRoute.get("/countries/", getCountry);
locationRoute.post("/countries/add", addCountry);
locationRoute.delete("/countries/delete/:country_id", deleteCountry);
locationRoute.put("/countries/update/:country_id", updateCountry);
locationRoute.get("/countries/details/:country_id", getDetailCountry);

// provinces
locationRoute.get("/provinces/", getProvince);
locationRoute.post("/provinces/add", addProvince);
locationRoute.delete("/provinces/delete/:prov_id", deleteProvince);
locationRoute.put("/provinces/update/:prov_id", updateProvince);
locationRoute.get("/provinces/details/:prov_id", getDetailProvince);

// city
locationRoute.get("/city/", getCity);
locationRoute.post("/city/add", addCity);
locationRoute.delete("/city/delete/:addr_id", deleteCity);
locationRoute.put("/city/update/:addr_id", updateCity);
locationRoute.get("/city/details/:addr_id", getDetailCity);

module.exports = locationRoute;
