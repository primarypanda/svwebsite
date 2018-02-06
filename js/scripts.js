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


// Randomizing logo Main //

function getRandomMainImage(){

    var images = [
        "images/logo/1.gif",
        "images/logo/2.gif",
        "images/logo/3.gif",
        "images/logo/4.gif",
        "images/logo/5.gif"
    ];
    return images[Math.floor(Math.random() * 5)];
}

$(document).ready(function(){
    $("#main-logo").attr('src', getRandomMainImage());
});



// Randomizing logo Projects //

function getRandomProjectImage(){

    var images = [
        "../images/logo/1.gif",
        "../images/logo/2.gif",
        "../images/logo/3.gif",
        "../images/logo/4.gif",
        "../images/logo/5.gif"
    ];
    return images[Math.floor(Math.random() * 5)];
}

$(document).ready(function(){
    $("#project-logo").attr('src', getRandomProjectImage());
});
