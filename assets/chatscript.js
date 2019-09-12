$(document).ready(function(){
    $(".signup").hide();
      $(".i").click(function(){
        $(".signup").show();
        $(".signin").hide();  
    });
    });

    jQuery.ajaxSetup({
      beforeSend: function() {
         $('.sec_loginform').show();
      },
      complete: function(){
         $('.sec_loginform').hide();
      },
      success: function() {}
    });