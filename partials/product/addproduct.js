$(function () {
  //NProgress.start();

  $("#main-sidebar-button").click(function () {
    console.log("nav bar call");

    $('#main-sidenav')
    .sidebar({
      context: '.main-content'
    })
    .sidebar('toggle');
  })

  $('.ui.dropdown').dropdown();

  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });

})
