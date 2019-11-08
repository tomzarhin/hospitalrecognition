var URL = location.protocol + '//' + location.host;

$(document).ready(function() {
    var diseasesAPI = URL + "/app/getdiseases";
    $.getJSON(diseasesAPI).done(function(allDiseases) {
         var diseasesScoresCheckboxes = [];

         for(var disease in allDiseases) {
             var diseaseScoreCheckbox = [];
             diseaseScoreCheckbox[0] = disease;
             diseaseScoreCheckbox[1] = allDiseases[disease]; // This is the score.

             var input = "<input type=\"checkbox\" name=\"PD[]\" value=\"" + disease + "\">";
             diseaseScoreCheckbox[2] = input;

             diseasesScoresCheckboxes.push(diseaseScoreCheckbox)
         }

         $('#add-new-patient').dataTable({
               data: diseasesScoresCheckboxes,
               columns:
               [
                   {
                       title: "Disease"
                   },
                   {
                       title: "Score"
                   },
                   {
                       title: "Diagnosis"
                   },
               ],
               scrollY: '40vh',
               scrollCollapse: true,
               paging: false,
               info: false,
               language: {
                 sSearch: "Search disease"
               }
          });
     });
});

function kaki(){
		document.getElementById('kaki').value = patients["firstName"];
		$("#kaki").attr("placeholder", patients["firstName"]);
       $("#first-name").attr("placeholder", patients["lastName"]);
       $("#hospitalNumber-disabled").attr("placeholder", patients["hospitalNumber"]);
       $("#date-of-birth-disabled").attr("placeholder", patients["dateOfBirth"]);
       $("#patient-score").html(patients["score"]);
}
  $(function() {
    $("body").on("click", '#scanFingerprintid', function(e){
        var patientsAPI = URL + "/app/getpatients";
		 $.getJSON(patientsAPI).done(function(patients) {
		setTimeout(function(){
		//document.getElementById('first-name').value =patients["firstName"];
		//document.getElementById('last-name').value= patients["lastName"];
		//document.getElementById('hospitalNumber').value=patients["hospitalNumber"];
		//document.getElementById('date-of-birth').value= patients["dateOfBirth"];
		//document.getElementById('patient-score').value=patients["score"];
		document.getElementById('first-name').value ="Tom";
		document.getElementById('last-name').value= "Zarhin";
		document.getElementById('hospitalNumber').value="TZFAT";
		//document.getElementById('date-of-birth').value="05/01/1993";
		document.getElementById('patient-score').value="100";
		},5000);
		})
     });
  });




/*
     Google analytics
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-97568701-1', 'auto');
ga('send', 'pageview');
