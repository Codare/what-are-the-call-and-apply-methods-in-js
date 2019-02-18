// The apply() Method with Arguments
// The apply() method accepts arguments in an array:

var person = {
  fullName: function(city, country, red, blue) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country + ", " + red + ", " + blue;
  }
};

var person1 = {
  firstName: "John",
  lastName: "Doe"
};

var person2 = {
    firstName: "Adrian",
    lastName: "Cooke"
  };

console.log(person.fullName.apply(person1, ["Nottingham", "United Kingdom", "Doing a great job!", "Keep going..."]));
  
console.log(person.fullName.apply(person2, ["Nottingham", "United Kingdom", "Doing a great job!", "Keep going..."]));
