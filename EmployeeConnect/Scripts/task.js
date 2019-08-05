$("document").ready(function() {
  if ($(window).width() > 425) {
    $(".h6 .panel-title .accordion-toggle").addClass("collapse");
  } else {
    $("#invoice").addClass("collapsed");
    $("#Invoice").addClass("collapse");
    $("#Inventory").addClass("collapse");
  }
});
