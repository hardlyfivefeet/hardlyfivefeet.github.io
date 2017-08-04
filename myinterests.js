function h1animation() {
  $(this).animate(
    {fontSize: "26px"},
  700)
  $(this).animate(
    {fontSize: "24px"},
  700);
  $(this).off('mouseenter', h1animation);
}

function setupHandlers() {
  $('h1').on('mouseenter', h1animation);
}

$(document).ready(setupHandlers);
