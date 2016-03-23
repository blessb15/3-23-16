$(document).ready(function(){

// var cactus = $("input:radio[name=flavor]:checked").val();



$("#cactus").click(function(){
  var animals = $("#animals").val();
  var cactus = $("input:radio[name=flavor]:checked").val();
  $(".output").append(cactus);
  $(".output").append(animals);


});

});
