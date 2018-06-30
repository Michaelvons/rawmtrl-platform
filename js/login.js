var login={
  init:function () {

  },

  login:function () {

    document.getElementById("loginButton").classList.add("loading");
    //  document.getElementById("loginButton").innerHTML = "PROCESSING"
    setTimeout(function(){   toastr.error("Gateway Timeout. Error Code : 504"); }, 5000);
  }
}

login.init();
