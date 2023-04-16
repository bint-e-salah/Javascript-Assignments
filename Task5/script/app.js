//Task5

var contactNames = []
var contactNumbers = []

contactNames.push(prompt("Enter first name"));
contactNumbers.push(+prompt("Enter first contactNumber"))
contactNames.push(prompt("Enter second name"));
contactNumbers.push(+prompt("Enter second contactNumber"))
contactNames.push(prompt("Enter third name"));
contactNumbers.push(+prompt("Enter third contactNumber"))

for(var i=0; i < 3; i++){
    console.log(contactNames[i]);
    console.log(contactNumbers[i]);
}

