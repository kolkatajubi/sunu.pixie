$(document).ready(function(){
    $(".signup").hide();
      $(".i").click(function(){
        $(".signup").show();
        $(".signin").hide();  
    });
    });

$(document)
  .ajaxStart(function () {
    $loading.show();
  })
  .ajaxStop(function () {
    $loading.hide();
  });