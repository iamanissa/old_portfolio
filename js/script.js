$(window).scroll(function(){
  // when the window scrolls, tell me where zero is in relation to the top
  var wScroll = $(this).scrollTop();

  $(".anissalogo").css({
    'transform' : 'translate(0px, '+ wScroll /8 +'%)'
  });

  $(".leaves").css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $(".yellow-flower").css({
    'transform' : 'translate('+ wScroll /80 +'%, '+ wScroll /2 +'%)'
  });

  // ==========  About me pics moving =============

  // if the scroll number is greater than whatever the top of the window is minus the actual windows height / 1.5 (for midpoint of window)
  if(wScroll > $('.gridAbout').offset().top - ($(window).height() / 1.5)){

    //iterate through each item with the class gridAbout & icon-about
    $('.gridAbout .icon-about').each(function(i){

      //set a timeout so they don't fad in at the same time and add the class is-showing to each one.
      setTimeout(function(){
        $('.gridAbout .icon-about').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }
});
