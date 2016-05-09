

function createSkillsChart(){
  var chrt = document.getElementById('mycanvas').getContext('2d');
  var data = {
    labels: ["HTML", "CSS/SASS", "Bootstrap", "JavaScript", "MEAN Stack", "Ruby", "Ruby on Rails", "PostgreSQL", "Git/github", "Wordpress/PHP" ], //x-axis
    datasets: [
      {
        label: "Skills",
        fillColor: "rgba(0,183,190, 0.4)",
        strokeColor: "rgba(0,183,190, 0.4)",
        highlightFill: "rgba(30,144,255,1)",
        highlightStroke: "rgba(220, 220, 220,1)",
        data: [78, 60, 65, 80, 50, 82, 86, 65, 50, 25] //y-axis

      }
    ],
  };

   var mySkillsChart = new Chart(chrt).Bar(data, {
    // responsive: true,
    scaleLabel : function (valuePayload) {
        if(Number(valuePayload.value)===0)
        return "zilch";
        if(Number(valuePayload.value)===25)
        return 'Basic, but interested in learning more';
        if(Number(valuePayload.value)===50)
        return "Medium, and I'm improving";
        if(Number(valuePayload.value)===75)
        return "High, I'm pretty good :-) ";
        if(Number(valuePayload.value)===100)
        return "Wizard Ninja Jedi Web Dev Master";
        },

    scaleOverride: true,
    scaleSteps: 4,
    scaleStepWidth: 25,
    scaleStartValue: 0,
    scaleShowVerticalLines: false,
    scaleFontColor: "#000000",

   });
}

window.onload = function() {
   createSkillsChart();
};
