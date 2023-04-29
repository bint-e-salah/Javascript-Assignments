
//Task 1 Zakat Percentage

//var zakatPercentage= 0.025;
//var userInput= +prompt("Enter your input value");
//var result= zakatPercentage * userInput;
//console.log(result);
//var result = 25;
//alert("your zakat value is" + result);


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
  
//   Task 3

//  var secretNumber = 7;
//  var userNumber = +prompt("Guess a number between 1-10");
//  if(userNumber === secretNumber){
//      alert("Congratulations!");
//  }
//  else {
//      alert("Try again")
//  }

 //Task4

//  var user = prompt("What is your name?")
//  var user = "quRaTuLAin";
//  console.log(user)
//  console.log( user.toLowerCase());
//  var userName = "quratulain"
//  var capitalizedName =userName[0] .toUpperCase() + userName.slice(1);
//  console.log(capitalizedName);

 //Task5

// var contactNames = []
// var contactNumbers = []

// contactNames.push(prompt("Enter first name"));
// contactNumbers.push(+prompt("Enter first contactNumber"))
// contactNames.push(prompt("Enter second name"));
// contactNumbers.push(+prompt("Enter second contactNumber"))
// contactNames.push(prompt("Enter third name"));
// contactNumbers.push(+prompt("Enter third contactNumber"))

// for(var i=0; i < 3; i++){
//     console.log(contactNames[i]);
//     console.log(contactNumbers[i]);
// }

//Task 6
// var products = ["Chocolato","Butterpuff","Candy","Cocomo","Sooper","Gluco"]
// var userInput = prompt("select your product index from 0-5")
// var userChoice = products.splice( userInput,1)
// console.log(products);
// console.log(userChoice);


//Task 7
// var userNationality = prompt("Your Nationality?");
// var userGender = prompt("Your gender?");
// var userAge = +prompt("Your age?");
// if(userNationality== "Pakistani" && userGender=== "Male" && userAge >=18){
//     alert("You are eligible to vote")

// }
// else if(userNationality== "Pakistani" && userGender=== "Female" && userAge >=18){
//     var feMale = prompt("Are you married?")
// }

//Task 8
// var worldCupSquade = ["Shoaib", "Sarfaraz","Rizwan","Babar","Shaheen","AhmedShahzad","Shadab","Asif","Fakhar","HaiderAli","Haris","Iftikhar","NaseemShah","ShanMasood","Nawaz"]
// var finalTeam = worldCupSquade.slice(3,14)
// console.log(worldCupSquade)
// console.log(finalTeam)




