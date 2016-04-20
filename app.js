"use strict";

(function(){
  angular
  .module("portfolio", [
    "ui.router"
  ])
  .config([
    "$stateProvider", RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("resume", {
      url:"/resume",
      templateUrl: "./resume/resume.html"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "./projects/projects.html"
    })
    .state("aboutme", {
      url: "/aboutme",
      templateUrl: "./aboutme/aboutme.html"
    });
  }
})();
