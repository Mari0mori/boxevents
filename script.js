$(document).ready(function() {
    for (let i = 0; i < 16; i++) {
        $(".grid-container").append("<div class='box'></div>");
    }

    $(".box").click(function() {
        if ($(this).hasClass("colored")) {
            $(this).removeClass("colored");
        } else {
            $(this).addClass("colored");
        }
    });
});
$(document).ready(function() {
    $('.box').on('click', function() {
      $('.box').toggleClass('darkMode');
    });
  });