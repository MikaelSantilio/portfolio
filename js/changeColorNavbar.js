$(function () {
    $("body").scroll(function () {
      var $nav = $(".navbar-transparente");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });