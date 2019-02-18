// The apply() method is similar to the call() method (previous chapter).
// In this example the fullName method of person is applied on person1:

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "Mary",
  lastName: "Doe",
}
person.fullName.apply(person1);  // Will return "Mary Doe"