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