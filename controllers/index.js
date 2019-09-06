//======================================
// CONFIGS
//--------------------------------------

// NODE PACKAGES
const express = require("express"),
  router = express.Router();

//======================================
// ROUTES
//--------------------------------------

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/codes", function(req, res) {
  res.render("code/portfolio");
});

router.get("*", (req, res) => res.send("404 PAGE NOT FOUND"));

module.exports = router;
