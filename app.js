$(document).ready(function(){
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
});
