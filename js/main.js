var d = new Date();
var year = d.getFullYear();
var sophomore = new Date("May 31, 2013 00:00:00");
var junior = new Date("May 31, 2014 00:00:00");
var senior = new Date("May 31, 2015 00:00:00");

var grade = "student"
if (d > sophomore) {
	grade = "sophomore"
}
if (d > junior) {
	grade = "junior"
}
if (d > senior) {
	grade = "senior"
}

$ = jQuery;
$(document).ready(function(){
	$("#year").text(year)
	$("#grade").text(grade)
})