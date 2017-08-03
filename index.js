alert('Heya, welcome to my website!' );

function h1animation() {
  $('h1').animate(
    {fontSize: "45px"},
  1500)
  $('h1').animate(
    {fontSize: "40px"},
  1500)
}

function h2animation() {
  $(this).animate(
    {fontSize: "27px"},
  800)
  $(this).animate(
    {fontSize: "24px"},
  800);
  $(this).off('mouseenter', h2animation);
}

function socialmediaFadeIn() {
  $('.mediaicon').fadeIn(3000);
}

function setupHandlers() {
  h1animation();
  $('.mediaicon').hide()
  $('h2').on('mouseenter', h2animation);
  $('#socialmedia').on('mouseenter', socialmediaFadeIn);

}


$(document).ready(setupHandlers);
