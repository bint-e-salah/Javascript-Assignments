// Task 2 fitrah amount
 var familyMembers =  +prompt("Enter the total number of your family member")
   var wheat = 250;
   var barley = 450;
   var dates = 2100;
   var raisins = 2800;
   var method = prompt("What is your option for fitrah?" + "\r " + "1-Wheat" + "\r" + "2- Barley" + "\r" + "3-Dates" + "\r" +  "4-Raisins");
   if(method==1){
     var fitrahAmount = wheat* familyMembers; 
     alert("Fitrah amount of your family is Rs" + ":" + fitrahAmount )
   }
   else if(method == 2){
     var fitrahAmount = barley * familyMembers;
     alert("Fitrah amount of your family is Rs" + ":" + fitrahAmount)
   }
   else if(method == 3){
     var fitrahAmount = dates * familyMembers;
     alert("Fitrah amount of your family is Rs" + ":" + fitrahAmount)
   }
   else if(method==4){
     var fitrahAmount = raisins * familyMembers;
     alert("Fitrah amount of your family is Rs" + ":" + fitrahAmount)
   }
   else{
     alert("You selected wrong method. Please try again")
   }
  console.log(fitrahAmount)
  alert("Your fitrah amount is" + fitrahAmount )
