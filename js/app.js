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


})
