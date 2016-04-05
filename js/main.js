$('.btn').on('mouseover', function () {
  $('.btn path:nth-child(2)').addClass('active');
});

$('svg').on('click', function () {
  $('svg').toggleClass('active2');
  $('.lines').toggleClass('active3');
  $('.engage').toggleClass('active4');
});
