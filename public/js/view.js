$(".recipeList").on("click", function() {
  console.log(this.attr("data-id"));
  recipeID = $(this).attr("data-id");
  $.get("/api/recipes/" + recipeId, function(data) {});
});
