$(document).ready(function() {
  var selector = ".sidebar a";
  $(selector).on("click", function() {
    $(this).tab("show");
    $(selector).removeClass("active");
    $(this).addClass("active");
  });
});
