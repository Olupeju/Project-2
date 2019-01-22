var db = require("../models");

module.exports = function(app) {
  // Get all recipes
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
      title: req.body.recipeName,
      foodType: req.body.foodType,
      description: req.body.description
    }).then(function(data) {
      console.log(data.dataValues.id);
      for(i = 0; i < req.body["ingredient[]"].length; i++) {
        db.Ingredients.create({
          ingredient: req.body["ingredient[]"[i],
          RecipeId: data.dataValues.id
        });
      }
      res.json({});
    });
  });

  // Get specific recipe with ingredients
  app.get("/api/recipes/:id", function(req, res) {
    //Add a join to include all ingredients here
    db.Recipe.findOne({
      include: [db.Ingredients],
      where: {
        id: req.params.id
      }
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
