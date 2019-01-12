module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    foodType: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredient1: {
      type: DataTypes.STRING
    },
    ingredient2: {
      type: DataTypes.STRING
    },
    ingredient3: {
      type: DataTypes.STRING
    },
    ingredient4: {
      type: DataTypes.STRING
    },
    ingredient5: {
      type: DataTypes.STRING
    },
    ingredient6: {
      type: DataTypes.STRING
    },
    ingredient7: {
      type: DataTypes.STRING
    },
    ingredient8: {
      type: DataTypes.STRING
    },
    ingredient9: {
      type: DataTypes.STRING
    },
    ingredient10: {
      type: DataTypes.STRING
    }
  });
  return Recipe;
};
