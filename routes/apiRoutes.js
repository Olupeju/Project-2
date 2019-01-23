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
      for (i = 0; i < req.body["ingredient[]"].length; i++) {
        db.Ingredients.create({
          ingredient: req.body["ingredient[]"][i],
          RecipeId: data.dataValues.id
        });
      }
      console.log("redirect");
      res.redirect("/");
    });
  });

  // Get specific recipe with ingredients
  app.get("/api/ingredients/:id", function(req, res) {
    //Add a join to include all ingredients here
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Ingredients]
    }).then(function(dbRecipe) {
      console.log(dbRecipe);
      res.json(dbRecipe);
    });
  });

  //Get recipes by foodtype with count for d3 bubble chart
  app.get("/api/count", function(req, res) {
    db.Recipe.findAll({
      attributes: [
        "foodtype",
        [db.sequelize.fn("COUNT", db.sequelize.col("foodtype")), "value"]
      ],
      group: ["foodtype"]
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
