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


var app = {
  init:function () {
    console.log("app started");
    app.gotoGettingStarted();
  },

  gotoGettingStarted:function () {
    NProgress.start();
    $( "#mainBodyContent" ).load( "../../partials/gettingstarted/index.html", function() {
      console.log("completed gotoGettingStarted");
      NProgress.done();
    });
  },

  gotoDashboardPage:function () {
    NProgress.start();
    $( "#mainBodyContent" ).load( "../../partials/dashboard/dashboard.html", function() {
      console.log("completed gotoDashboardPage");
      NProgress.done();
    });
  },

  gotoNewProductPage:function () {
    NProgress.start();
    $( "#mainBodyContent" ).load( "../../partials/product/addproduct.html", function() {
      console.log("completed gotoNewProductPage");
      NProgress.done();
    });
  },

  // gotoNewAltProductPage:function () {
  //   NProgress.start();
  //   $( "#mainBodyContent" ).load( "pages/product/addaltproduct.html", function() {
  //     console.log("completed gotoNewAltProductPage");
  //     NProgress.done();
  //   });
  // },

  gotoAllProductsPage:function () {
    NProgress.start();
    $( "#mainBodyContent" ).load( "../../partials/product/products.html", function() {
      console.log("completed gotoAllProductsPage");
      NProgress.done();
    });
  },

  showProductDetails:function (id) {
    NProgress.start();
    console.log(id);
    $( "#mainBodyContent" ).load( "../../partials/product/productdetails.html", function() {
      console.log("completed showProductDetails");
       alert(id);
      //console.log(id);
      NProgress.done();
    });
  }
}
