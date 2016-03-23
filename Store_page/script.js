$(document).ready(function(){

  $("form#add").submit(function(event){
    event.preventDefault();
    var Name = $("input#name").val();
    var Email = $("input#email").val();
    var Phone = $("input#phone-number").val();
    var Address = $("input#billing-address").val();

    $(".name2").append(Name);
    $(".email").append(Email);
    $(".phone").append(Phone);
    $(".address").append(Address);


  });

});
