//  CONSTRUCTOR FUNCTIONS

// function Person(firstname, lastname) {

//   console.log(this)
//   this.firstname = firstname;
//   this.lastname = lastname;
//   console.log('This function is invoked')
// }

// var john = new Person('John', 'Doe');
// console.log(john);

// var jane = new Person('Jane', 'Doe');
// console.log(jane);

/////////////////////////////////////////////

// SETTING THE PROTOTYPE

function Person(firstname, lastname) {

  console.log(this)
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked')
}

Person.prototype

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);