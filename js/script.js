$(document).ready(function(){
    $("#toggle").click(function(){
     if ($(this).is(':checked')) {
        $("body").addClass("dark");
     }else{
        $("body").removeClass("dark");
     }
    });
  });