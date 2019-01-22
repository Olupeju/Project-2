var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.query.type) {
      console.log("has query");
      db.Recipe.findAll({
        where: {
          foodType: req.query.type
        }
      }).then(function(dbRecipes) {
        res.render("index", {
          msg: "Welcome!",
          recipes: dbRecipes
        });
      });
    } else {
      console.log("find all");
      db.Recipe.findAll({}).then(function(dbRecipes) {
        res.render("index", {
          msg: "Welcome!",
          recipes: dbRecipes
        });
      });
    }
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

  //Recipe page
  // URL is /recipe?recipe_id=2
  app.get("/recipe", function(req, res) {
    db.Recipe.findOne({
      include: [db.Ingredients],
      where: {
        id: req.query.recipe_id //This gets the recipe_id following the question mark this is a query string parameter
      }
    }).then(function(dbRecipes) {
      res.render("recipe", {
        recipes: dbRecipes,
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
