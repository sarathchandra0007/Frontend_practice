var firstName=prompt("enter first name")
var lastName=prompt("enter last name")
var age=prompt("enter age")
var height=prompt("enter height in cm")
var petletter=prompt("last name of pet name")

if ((firstName[0] === lastName[0]) && (age>20 && age<30) && (height>170) && (petletter[(petletter.length)-1]==="y")){
  console.log("Hi sarath welcome");
}else {
  console.log("entered info is wrong");
}
