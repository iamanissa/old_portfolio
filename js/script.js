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

});
