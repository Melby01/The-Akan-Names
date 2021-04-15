function akanNames(){
   var year=document.getElementById("year").value;
   var month=document.getElementById("month").value;
   var day=document.getElementById("day").value;
   var genders=document.getElementById("gender").value;
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   let dateString = month+"/"+day+"/"+year;
   var birthDate = new Date(dateString);
   var dayOfTheWeek = birthDate.getDay();
   if (day <= 0 || day > 31) {
     alert("Please enter a valid date!");
     throw new Error; 
   }
   else if (month <1  || month>12 || month==2 && day>29)
   {
      alert("invalid month");
      throw new Error;  
   }
   else if (year <= 0 || year > 2021) {
       alert("Please enter a valid year!");
       throw new Error;  
   }
   else if (genders.length===0) {
     alert("Please select your gender")
     throw new Error;  
   }
   else if (genders == "Male") {
       document.getElementById("displayName").innerHTML = "You were born on a " + days[dayOfTheWeek] + ". " + " Your Akan name is " + maleNames[dayOfTheWeek] + "!"
   }
   else if (genders == "Female") {
       document.getElementById("displayName").innerHTML = "You were born on a " + days[dayOfTheWeek] + "." + " Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
   }
   let frm = document.getElementsByName('form1')[0];
   frm.reset();
   return false;
 }