

function createSkillsChart(){
  var chrt = document.getElementById('mycanvas').getContext('2d');
  var data = {
    labels: ["HTML/CSS", "JavaScript", "AngularJS", "Ruby", "Ruby on Rails" ], //x-axis
    datasets: [
      {
        label: "Skills",
        fillColor: "rgba(220, 220, 220, 0.8)",
        strokeColor: "rgba(220, 220, 220, 0.8)",
        highlightFill: "rgba(220, 220, 220, 0.75)",
        highlightStroke: "rgba(220, 220, 220,1)",
        data: [65, 59, 80, 81, 56, 55, 40] //y-axis
      }
    ]
  };

  var options = {
    scaleLabel : function (valuePayload) {
        if(Number(valuePayload.value)===0)
        return "zilch";
        if(Number(valuePayload.value)===20)
        return 'request added';
        if(Number(valuePayload.value)===40)
        return 'request viewed';
        if(Number(valuePayload.value)===60)
        return 'request accepted';
        if(Number(valuePayload.value)===80)
        return 'request solved';
        if(Number(valuePayload.value)===100)
        return 'solving confirmed';
        },

    scaleOverride: true,
    scaleSteps: 5,
    scaleStepWidth: 20,
    scaleStartValue: 0
   };

   var mySkillsChart = new Chart(chrt).Bar(data, options);
}

window.onload = function() {
   createSkillsChart();
};
