// Display current day upon opening browser
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
$(document).ready(function(){
$("#getDate").click(function(){
$("button").text("date");
});
});
