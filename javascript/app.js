$(document).ready(function(){

  // $('a .js-toggle-page').on('click', function( e ){
  //
  // })
  $(".resumeView").hide();
  $(".projectView").hide();
  $(".aboutmeView").show();

  $("#projects").on("click", function(){
    $(".aboutmeView").hide();
    $(".resumeView").hide();
    $(".projectView").show();
  });
  $("#aboutme").on("click", function(){
    $(".resumeView").hide();
    $(".projectView").hide();
    $(".aboutmeView").show();
  });
  $("#resume").on("click", function(){
    $(".aboutmeView").hide();
    $(".projectView").hide();
    $(".resumeView").show();
  });

  $('#vivaWeb').click(function() {
   window.location = "https://vivalavegan.herokuapp.com/";
  });
  $('#vivaCode').click(function() {
   window.location = "https://github.com/SuperJones/vivalavegan";
  });
  $('#memoryWeb').click(function() {
   window.location = "http://superjones.github.io/project1/";
  });
  $('#memoryCode').click(function() {
   window.location = "https://github.com/SuperJones/project1";
  });
  /*Add this button later*/
  // $('#stepsWeb').click(function() {
  //  window.location = "#";
  // });
  $('#stepsCode').click(function() {
   window.location = "https://github.com/SuperJones/project2";
  });
});
