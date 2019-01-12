var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Create a new recipe
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create({
      title: req.body.title,
      foodType: req.body.foodType,
      ingredient1: req.body.ingredient1,
      ingredient2: req.body.ingredient2,
      ingredient3: req.body.ingredient3,
      ingredient4: req.body.ingredient4,
      ingredient5: req.body.ingredient5,
      ingredient6: req.body.ingredient6,
      ingredient7: req.body.ingredient7,
      ingredient8: req.body.ingredient8,
      ingredient9: req.body.ingredient9,
      ingredient10: req.body.ingredient10
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
