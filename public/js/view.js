$(".recipeList").on("click", function() {
  recipeID = $(this).attr("data-id");
  $.get("/api/recipes/"+recipeId, function(data) {

  })
});
