    // $(".signup").hide();
    //   $(".i").click(function(){
    //     $(".signup").show();
    //     $(".signin").hide();  
    // });
    // });
  //   jQuery.ajax({
  //     type: "POST",
  //     beforeSend: function() {
  //         $(".sec_loginform").show();
  //     },
  //     success: function() {
  //         $(".sec_loginform").hide();
  //     }
  // });

  
$(document).ready(function () {

  $.ajax({
      type: 'POST',
      url: 'http://localhost:5125',

      dataType: "jsonp",

      crossDomain: true,
      success: function (msg) {

          alert("success");

      },
      error: function (request, status, error) {

          alert(error);
      }
  });
});
  
