function makeGreeting(language) {

  return function (firstname, lastname) {

    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');


greetEnglish('Anthony', 'Eriksen');
greetSpanish('Debra', 'Thompson');

// --- Creation Phase ---
// Global Execution Context is created
// makeGreeting, var greetEnglish, var greetSpanish is stored in memory.

// --- Execution Phase ---
// makeGreeting executes
// New execution context is created
// 'en' is passed to the language parameter
// Stores language in memory
// returns a function
// Execution Context is popped off the stack

// makeGreeting executes
// New execution context is created
// 'es' is passed to the language parameter
// Stores language in memory
// returns a function
// Execution Context is popped off the stack

// greetEnglish runs
// New execution context is created
// Passes values to the parameters
// Finds if statement
// Looks to the outer environment for 'language'
// Finds 'en' stored in the Closure of makeGreeting at time of execution.
// Outputs 'Hello Anthony Eriksen'

// greetSpanish runs
// New execution context is created
// Passes values to the parameters
// Finds if statement
// Looks to the outer environment for 'language'
// Finds 'es' stored in the Closure of makeGreeting at time of execution, which was stored in greetSpanish
// Outputs 'Hola Debra Thompson'

// Each time the makeGreeting functions are ran, a new execution context is created for each.
// The language parameter being passed, is stored in memory still, even after the function has popped off the stack.
// When each greet function is run, and see's the language variable, it reaches to it's outer environment for it.
// eg. The value 'en', is stored in greetEnglish previous execution context from when it was invoked in the makeGreeting() function.
// The JavaScript Engine knows this, so when greetEnglish is called, and reaches to it's outer environment, it still has reference,
// to the value 'en' stored in the language variable, of that execution context. Inside of the "Closure"
// So each function, greetEnglish, and greetSpanish, created seperate execution contexts, and "Closed" in it's outer environment reference.