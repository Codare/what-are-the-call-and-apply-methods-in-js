var person = {
  fullName: function(city, country) {
    console.log(city);
    console.log(country);
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
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

console.log(person.fullName.call(person1, "Oslo", "Norway"));

console.log(person.fullName.call(person2, "Nottingham", "United Kingdom"));