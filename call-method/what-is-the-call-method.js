//This example calls the fullName method of person, using it on person1:

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
var person1 = {
  firstName: "John",
  lastName: "Doe"
};
var person2 = {
  firstName: "Mary",
  lastName: "Doe"
};

console.log(person.fullName.call(person1)); // Will return "John Doe"
console.log(person.fullName.call(person2)); // Will return "Mary Doe"
