//Task 6
var products = ["Chocolato","Butterpuff","Candy","Cocomo","Sooper","Gluco"]
var userInput = prompt("select your product index from 0-5")
var userChoice = products.splice( userInput,1)
console.log(products);
console.log(userChoice);
