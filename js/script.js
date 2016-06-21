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

  // =============== ABOUT ME MOVING PICS =============

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


//================ SKILLS BAR CHART =====================

  if(wScroll > $('.gridSkills').offset().top - ($(window).height() / 1.5)){

    $(function() {
      $("#bars li .bar").each( function( key, bar ) {
        var percentage = $(this).data('percentage');

        $(this).animate({
          'height' : percentage + '%',

        }, 1000);
      });
    });
  }

});

//================ PROJECTS =====================


// $('#oryxWeb').click(function() {
//   window.open("", '_blank');
// });
$('#oryxCode').click(function() {
 window.open( "https://github.com/rubyforgood/scimitar_oryx", '_blank');
});

$('#vivaWeb').click(function() {
  window.open("https://vivalavegan.herokuapp.com/", '_blank');
});
$('#vivaCode').click(function() {
 window.open( "https://github.com/SuperJones/vivalavegan", '_blank');
});

$('#memoryWeb').click(function() {
 window.open("http://superjones.github.io/project1/", '_black');
});
$('#memoryCode').click(function() {
 window.open("https://github.com/SuperJones/project1", '_black');
});
$('#stepsWeb').click(function() {
 window.open("https://steps-battle.herokuapp.com/", '_black');
});
$('#stepsCode').click(function() {
 window.open("https://github.com/SuperJones/project2", '_black');
});
