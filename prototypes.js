var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ': ' + john[prop])
  }
}

// console.log(john.getFullName())

// console.log('---------------')
// console.log(john.firstname);
// console.log('---------------')


// var jane = {
//   firstname: 'Jane'
// }

// jane.__proto__ = person;
// console.log(jane.getFullName()) // Output: Jane Default

// // When getFullName() is called on the "jane" object,
// // The "this" variable, is pointing to the "jane" object, 
// // because that is where it was called on.
// // Then function runs, and finds firstname.... 'Jane'
// // When it searches for the lastname, it doesn't find it
// // in "jane" so it looks down the Prototype Chain.
// // Since janes prototype is set to the "person" object
// // It finds "default" as the last name
// // Thus outputs "Jane Default"

// console.log('------------------------');

// var a = {};
// var b = function () {};
// var c = [];