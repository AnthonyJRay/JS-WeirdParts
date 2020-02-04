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

Person.prototype.getFullName = function () {
  return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function () {
  return this.lastname + ', ' + this.firstname;
}

console.log('-----------------------------------')
console.log('-----------------------------------')

String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
}

console.log("John".isLengthGreaterThan(3))

console.log('-----------------------------------')
console.log('-----------------------------------')

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
  console.log(prop + ":" + " " + arr[prop])
}

console.log('-----------------------------------')
console.log('-----------------------------------')

// Remember, 'this' must be used to point to the Object, 
// or else it will look for 'this' in the functions execution context, 
// not find it, then goto the Global Execution Context.
// This happens because... Objects don't create new Execution Contexts
var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function () {
    return 'Hi ' + this.firstname;
  }
}

var john = Object.create(person);
console.log(john)

//////////////////////////////////////////////

// Polyfill

if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation' + ' only accepts the first parameter.');
    }

    function F() {
      F.prototype = o;
      return new F();
    }
  }
}

// Checks to see if Object.create exists. It it doesn't it will return 'Undefined'
// If it does exist, the whole if statement is skipped.
// If it returns 'Undefined', if statement will run.
// Create get's added to the 'Base' Object which is on the Global Object.
// Takes a function, and checks for only 1 argument. If not, throw Error.
// THE IMPORTANT PART
// It creates an empty function.
// Then sets the Prototype, equal to the Object you passed in.
// Returns a new function, which is just an empty constructor function

// AGAIN

// The 'new' keyword creates an empty Object..
// It runs the function again. which is empty..
// Then points the prototype, of the new empty Object, to whatever you passed in.