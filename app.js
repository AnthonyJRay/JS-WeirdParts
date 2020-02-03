// Initialization Example

var people = [{
    // The John Object
    firstname: 'John',
    lastname: 'Doe',
    addresses: [
      '111 Main St.',
      '222 Third St.'
    ]
  },
  {
    // The Jane Object
    firstname: 'Jane',
    lastname: 'Doe',
    addresses: [
      '333 Main St.',
      '444 Fifth St.'
    ],
    greet: function () {
      return 'Hello!';
    }
  }
]

console.log(people);

console.log('-----------------------')
console.log('-----------------------')


// Figuring out what something is.

var a = 3;
console.log(typeof a); // Number

var b = "Hello";
console.log(typeof b); // String

var c = {};
console.log(typeof c); // Object

var d = [];
console.log(typeof d); // Object // Weird!
console.log(Object.prototype.toString.call(d)); // Better!

function Person(name) {
  this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // Object
console.log(e instanceof Person); // true

console.log(typeof undefined) // undefined // Makes sense
console.log(typeof null) // Bug, since, FOREVER

var z = function () {};
console.log(typeof z); // function

console.log('-----------------------')
console.log('-----------------------')

var person;

persom = {};
console.log(persom);
console.log(person);