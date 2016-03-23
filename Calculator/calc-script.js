var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function(){
$("form#add").submit(function(event){
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  $("button#add").click(function(){
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("button#subtract").click(function(){
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("button#multiply").click(function(){
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("button#divide").click(function(){
    var result = divide(number1, number2);
    $("#output").text(result);
  });


});

});
