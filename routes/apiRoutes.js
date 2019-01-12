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
      ingredient2: req.body.ingredient1,
      ingredient3: req.body.ingredient1,
      ingredient4: req.body.ingredient1,
      ingredient5: req.body.ingredient1,
      ingredient6: req.body.ingredient1,
      ingredient7: req.body.ingredient1,
      ingredient8: req.body.ingredient1,
      ingredient9: req.body.ingredient1,
      ingredient10: req.body.ingredient1
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
