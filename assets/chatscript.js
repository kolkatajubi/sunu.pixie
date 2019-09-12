$(document).ready(function(){
    // $(".signup").hide();
    //   $(".i").click(function(){
    //     $(".signup").show();
    //     $(".signin").hide();  
    // });
    // });

    jQuery.ajax({
      type: "POST",
      url: 'YOU_URL_TO_WHICH_DATA_SEND',
      data:'YOUR_DATA_TO_SEND',
      beforeSend: function() {
          $(".sec_loginform").show();
      },
      success: function(data) {
          $(".sec_loginform").hide();
      
        }
      });
      });