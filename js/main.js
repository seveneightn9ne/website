var d = new Date();
var year = d.getFullYear();
sophomore = new Date("August 31, 2013 00:00:00");
junior = new Date("May 31, 2014 00:00:00");
senior = new Date("May 31, 2015 00:00:00");

if (d > sphomore) {
	grade = "sophomore"
}
if (d > junior) {
	grade = "junior"
}
if (d > senior) {
	grade = "senior"
}