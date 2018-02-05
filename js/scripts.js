// Prevention of right click, copy or paste //

$(document).ready(function () {
    //Disable cut copy paste
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });

    //Disable mouse right click
    $("body").on("contextmenu",function(e){
        return false;
    });
});


// Scaling iframes proportionally //

$(function(){
  if($('body').hasClass('scale')){
    jQuery(function() {
        function setAspectRatio() {
          jQuery('iframe').each(function() {
            jQuery(this).css('height', jQuery(this).width() * 9/16);
          });
        }

        setAspectRatio();
        jQuery(window).resize(setAspectRatio);
    });
  }
});
