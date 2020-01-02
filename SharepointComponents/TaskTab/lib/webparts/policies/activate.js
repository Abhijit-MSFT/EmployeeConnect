$(document).ready(function() {
  var selector = ".sidebar a";
  $(selector).on("click", function() {
    $(this).tab("show");
    $(selector).removeClass("active");
    $(this).addClass("active");
  });

  $("#heading2,#heading3,#heading4").hide();
  var selector = ".sidebar a";
  $(selector).on("click", function() {
    $(selector).removeClass("active");
    $(this).addClass("active");
  });

  $(".HR").on("click", function() {
    $("#heading2,#heading3,#heading4").hide();
    $("#heading1").show();
  });

  $(".PB").on("click", function() {
    $("#heading2").show();
    $("#heading1,#heading3,#heading4").hide();
  });

  $(".IT").on("click", function() {
    $("#heading1,#heading2,#heading4").hide();
    $("#heading3").show();
  });

  $(".RO").on("click", function() {
    $("#heading1,#heading2,#heading3").hide();
    $("#heading4").show();
  });

});
