var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipes) {
      res.render("index", {
        msg: "Welcome!",
        recipes: dbRecipes
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/add", function(req, res) {
    res.render("add");
    //db.Recipe.findOne({ where: { id: req.params.id } }).then(function(
    //  dbRecipes
    //) {
    //  res.render("recipes", {
    //    recipes: dbRecipes
    //  });
    //});
  });

  app.get("/recipe/", function(req, res) {
    res.render("recipe");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
