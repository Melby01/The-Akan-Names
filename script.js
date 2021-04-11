
var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var akanFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var akanMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

function akanNames() {
   var century=parseInt(document.getElementById("century").value);
   var year=parseInt(document.getElementById("year").value);
   var month=parseInt(document.getElementById("month").value);
   var Day=parseInt(document.getElementById("day").value);
   var gender=document.getElementById("gender").value;

var CC=century;
var YY=year;
var MM=month;
var DD=day;

var d = parseInt(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD) % 7

if (CC < 1 || CC > 30){
   alert("Invalid cc");
}
else if (YY < 1 || YY > 99){
   alert("Invalid yy");
}
else if (MM < 1 || MM > 12){
   alert("Invalid mm");
}
else if (DD < 1 || DD > 31) {
   alert("Invalid dd");
}
else if (gender === "Male"){
   alert("Your akan name is " + akanMale[d])
}
else if (gender === "Female"){
   alert("Your akan name is " + akanFemale[d])
}
