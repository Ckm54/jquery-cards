$(document).ready(function () {
    $(".card-front").click(function() {
        $(this).css("display", "none");
        $(this).siblings('.card-back').css("display", "inline-block");
      });
      $(".card-back").click(function() {
        $(this).css("display", "none");
        $(this).siblings('.card-front').css("display", "inline-block");
      });
});