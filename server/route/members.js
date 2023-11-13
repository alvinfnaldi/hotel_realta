const memberRoute = require("express").Router();
const {
  getMember,
  addMember,
  deleteMember,
  getDetailMember,
} = require("../controller/memberController");

memberRoute.get("/", getMember);
memberRoute.post("/add", addMember);
memberRoute.delete("/delete/:name", deleteMember);
memberRoute.get("/details/:name", getDetailMember);

module.exports = memberRoute;
