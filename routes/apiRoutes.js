var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Get recipes by food type
  app.get("/api/recipes/:type", function(req, res) {
    db.Recipe.findAll({
      where: {
        foodType: req.params.type
      }
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create({
      title: req.body.title,
      foodType: req.body.foodType,
      description: req.body.description
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Delete an example by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipe.destroy({ where: { id: req.params.id } }).then(function(
      dbRecipe
    ) {
      res.json(dbRecipe);
    });
  });
};
