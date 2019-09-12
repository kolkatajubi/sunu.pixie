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
    $(document)
    .ajaxStart(function () {
         $("#ajaxSpinnerImage").show();
    })
    .ajaxStop(function () {
         $("#ajaxSpinnerImage").hide();
    });