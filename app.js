// call(), apply(), bind()

var person = {
  firstname: 'Anthony',
  lastname: 'Eriksen',
  getFullName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName())
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('--------------')
}.bind(person)

logName('en');

logName.call(person, 'en', 'es')
logName.apply(person, ['en', 'es'])

console.log('------------------------')


// function borrowing


var person2 = {
  firstname: 'Debra',
  lastname: 'Thompson'
}

console.log(person.getFullName.call(person2));


console.log('------------------------')


// Function Currying

function multiply(a, b) {
  return a * b;
}

// a will always = 2
var multipleByTwo = multiply.bind(this, 2)
console.log(multipleByTwo(6))

// a will always = 3
var multipleByThree = multiply.bind(this, 3)
console.log(multipleByThree(6))

// a will always = 4
var multipleByFour = multiply.bind(this, 4)
console.log(multipleByFour(6))


console.log('------------------------------')


function mapForEach(arr, fn) {

  var newArr = [];
  for (var i = 0; i < arr.length; i++) {

    newArr.push(
      fn(arr[i])
    )

  };
  return newArr;

}

var arr1 = [1, 2, 3];
console.log(arr1); // Output: [1, 2, 3]

arr2 = mapForEach(arr1, function (item) {
  return item * 2;
})
console.log(arr2) // Output: [2, 4, 6]

arr3 = mapForEach(arr1, function (item) {
  return item > 2;
})
console.log(arr3) // Output: [false, false, true]


var checkPastLimit = function (limiter, item) {
  return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4); // [false, true, true]


var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);

console.log('--------------------------------');


// Underscore JS
// var arr6 = _.map(arr1, function (item) {
//   return item * 3
// });
// console.log(arr6); // Output: [3, 6, 9]

// var arr7 = _.filter([2, 3, 4, 5, 6, 7], function (item) {
//   return item % 2 === 0;
// });
// console.log(arr7);

console.log('--------------------------------')