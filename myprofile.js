function h2animation() {
  $(this).animate(
    {fontSize: "26px"},
  700)
  $(this).animate(
    {fontSize: "24px"},
  700);
  $(this).off('mouseenter', h2animation);
}

function socialmediaFadeIn() {
  $('.mediaicon').fadeIn(3000);
}

function setupHandlers() {
  $('.mediaicon').hide();
  $('h2').on('mouseenter', h2animation);
  $('#socialmedia').on('mouseenter', socialmediaFadeIn);
}


$(document).ready(setupHandlers);
