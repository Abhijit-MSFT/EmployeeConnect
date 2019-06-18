$(document).ready(function() {
  $(".icon-cal").click(function() {
    $(".added-icon").show();
    $(".icon-cal").hide();
  });
    var selector = ".sidebar a";
    $(selector).on("click", function () {
        $(selector).removeClass("active");
        $(this).addClass("active");
    });
    $(".heading1,.heading3,.heading4").hide();
    $(".PB").on("click", function () {
        $(".heading1").show();
        $(".heading2,.heading3,.heading4").hide();
    });
    $(".HR").on("click", function () {
        $(".heading1,.heading3,.heading4").hide();
        $(".heading2").show();
    });
    $(".IT").on("click", function () {
        $(".heading1,.heading2,.heading4").hide();
        $(".heading3").show();
    });
    $(".RO").on("click", function () {
        $(".heading1,.heading2,.heading3").hide();
        $(".heading4").show();
    });
});