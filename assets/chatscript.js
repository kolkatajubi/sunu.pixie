$(document).ready(function(){
    // $(".signup").hide();
    //   $(".i").click(function(){
    //     $(".signup").show();
    //     $(".signin").hide();  
    // });
    // });

    jQuery.ajax({
    
      beforeSend: function() {
          $(".sec_loginform").hide();
      },
      success: function(data) {
          $(".sec_loginform").show();
      
        }
      });
      });