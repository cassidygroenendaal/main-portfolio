//======================================
// CONFIGS
//--------------------------------------

// NODE PACKAGES
const express = require("express"),
  exphbs = require("express-handlebars"),
  logger = require("morgan");

const app = express(),
  PORT = process.env.PORT || 8080;

// IMPORT ROUTES
const htmlRoutes = require("./controllers");

// DEV TOOLS
app.use(logger("dev"));

// APP SET UP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//======================================
// ROUTES
//--------------------------------------

app.use(htmlRoutes);

//======================================
// SERVER START
//--------------------------------------

app.listen(PORT, () => console.log(`==> Server running on ${PORT}`));
