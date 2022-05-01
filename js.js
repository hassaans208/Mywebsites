// // Set up any config you need (you might not need this)
// requirejs.config({
//   basePath: "/scripts"
// });

// // Tell RequireJS to load your main module (and its dependencies)
// require("mainmodule");

$(function(){
  $("button").on("click", function(){
$("p").toggle();
});
$("button").on("click", function(){
$("#tx").show(1000);
});
});
