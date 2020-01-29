# JavaScript - Understanding the Weird parts

## Syntax Parsers

---

### A program that reads your code, and determines what it does and if it's grammar is valid

---

When you write _JavaScript_, it isn't magically telling the computer what to do. You are being abstracted away from all of that. You're writing code that someone else, or other people, built programs that convert your Javacript, into something the computer can understand. Often times these are called **_Compilers_**.
At times, it also may have to do with **_interpreters_**.

It's these _tools_ that actually do the work, of reading your code, character by character, and determining if the Syntax is valid, and implementing it, in a way that the computer can understand.

## Lexical Environments

---

### Where something sits _physically_, in the code your write

---

The word _Lexical_ means, _having to do with words or grammar_. A **Lexical Environment**
exists in programming languages inwhich **where**
you write something is _important._

When talking about _Lexical Environments_, we are talking about **where it's written**, and **what surrounds it**.

## Execution Contexts

---

### A wrapper, to help manage the code that is running

---

There are lots of _lexical environments_. Which one is _currently_ running is managed via **Execution Contexts**.

### Just remember, the concepts explained, are **IMPORTANT**

---

## Name/Value Pairs and Objects

---

### When writing _JavaScript_, **Objects** are very **important**. You must _understand_ what an _Object_ is, in regards to _JavaScript_ itself

---

First, you must understand the term Name/Value Pair. It's quite simple...

A name which represents maps to a unique value.

The name may be defined more than once, but only can have one value in any given context.

The value may be more name/value pairs. (Objects inside Objects)

## Object

---

### An object, is a collection of name/value pairs

---

This is the simplest definition when talking about JavaScript.

Other programming languages may have more complex concepts when it comes to Objects, but in JavaScript, they are just a **collection of name/value pairs**.

Don't think any more deeply about objects in JavaScript than this.

## The Global Environment and Global Scope

---

Whenever code is run in JavaScript, it is run inside an **Execution Context.**

A wrapper, that the JavaScript Engine, (_the program that other people wrote (Parser, Compiler)_), wraps the code, into an _Execution Context_. This is the Global _Execution Context_. The base _Execution Context_.

Global, meaning it's _accessible_ from **ANYWHERE** in your code. It's _Global_.

The Global Execution Context creates 2 things for you,

### The Global Object

---

#### The variable 'this'

---

The _JavaScript Engine_, is creating these 2 things for you, whenever your code is run, because your code is _wrapped_, inside an **Execution Context**.

The _window_ object, is the _Global object_, inside of browsers.

If you are running Nodejs and running JavaScript on a server, there is a different Global Object.

But there is always a Global Object. If you had a different browser tab, or window open, it would be a different Execution Context.

There is a special keyword, JavaScript creates, inside the Execution Context called "_this_".

So if you run a blank JavaScript file, the engine will create a _Global Object_, which is also the _Window Object_.

The '_this_' keyword, would then be _pointing_, to the global, or window object since the _execution context_, of a blank JavaScript file, would be the _Window Object_. (browsers)

When talking about "Global", you are talking about _Not inside a function_.

In JavaScript, when you variables and functions, not inside a function, those variables and functions get attached to the Global Object.

So, when your JavaScript is executed, an Executiong Context is created.

At the base level, meaning not inside a function, you have the Global Object. This is created by the JavaScript Engine, as part of that execution context. If running code inside of a browser, the global object is the Window Object.

You get a special variable called "this". In the case of the browser, "this" is just pointing to the Window Object.

There is also a link, to the Outer Environment. For example when writing code inside a function, the Outer Environment is the code OUTSIDE the function. In the case of the Window Object, there is no Outer environment. It is the Global Object, nothing is above the Global Object. This is important for running and executing functions.

Finally, the execution context is running your code.
If you're creating variables and functions, then that is going to sit on the Global Object.

What's important to remember is that there is a wrapper, an execution context, which has other things, that you did not write.

## The Execution Context: Creation and 'Hoisting'

---

The reason JavaScript behaves the way it does, the way that variables and functions are at some degree available even though they are written later in the code, is because the _Execution Context is created in two phases._

The first phase is the **Creation Phase**.
In this phase you have the Global Object, 'this', and Outer Environment.
In this phase, where the parser begins to run your code and setup what you've written for translation, it recognizes where you've created variables, and functions.

So, it sets up, in the Creation Phase, the memory space for Variables and Functions. This step, is what is confusingly known as **Hoisting**.

So **Hoisting** doesn't actually move any of your code anywhere. It simply is that, before your code, begins to be executed line by line, the JavaScript Engine has already set aside memory space for all of the variables and functions you've created.

So those functions and variables exist in memory already. That way, when the code begins to execute line by line, it can access them.

However, with Variables, it's a little bit different.

When a function, gets stored in memory, the name, and the code within is stored.
With variables, the assignment operator doesn't run until the Execution phase.
Although, the variable has been setup within memory, ultimately, the value isn't read until the execution phase.

This is why a function can be called or invoked before it is created in the code, but a variable, would return **Undefined** if accessed _before it is written_, because the JavaScript engine doesn't have a _value_ for the variable yet. Instead, it gets a placeholder, called **Undefined**. The placeholder more or less means, "I don't know what this value is yet". It is the same placeholder used, if you never set a value at all.

### All variables, in JavaScript, are initially set to 'Undefined', and functions are sitting in memory entirely

---

That is why it's a bad idea, to rely on Hoisting in anyway. You can run into trouble, when that value is actually Undefined, and not the value you were expecting.

## JavaScript and 'undefined'

---

_Undefined_ and _not defined_ are **NOT** the same thing.

_Undefined_ means it has been created, but no value has been defined yet.
_not defined_ means it hasn't been created. We haven't defined that there is a variable.

_Undefined_ isn't just a word, it is actually a special **Value**.
_not defined_ appears in an error.

You should _never_ set a variables value to _undefined_ manually. It is best to leave the JavaScript engine do this when it needs to. This will help with debugging.

## The Execution Context: Execution Phase

---

Now, since it has all those variables and functions you have written in memory, it will begin to run that code, line by line. This is the phase where your function calls will run, and variables will be assigned their values.

## Single Threaded, Synchronous Execution

---

### Single Threaded

- One command is being executed at a time.
  - Under the hood of the browser, maybe not.

In the browser, JavaScript is not the only thing that is running. When we say JavaScript is single-threaded, it may not be under the hood of the browser.

But, from our perspective as programmers, JavaScript behaves in a single-threaded manner.

### Synchronous

- Similar to single-threaded, Synchronous meaning, one at a time.
  - And in order...
    - One line of code being executed, at a time, in order.
      - The code is executed one line at a time, in the order that it appears.

## Function Invocation and the Execution Stack

---

### Invocation

- Running a function
- In JavaScript, by using parenthesis()

## Functions, Context, and Variable Environments

---

### Variable Environment

- Where variables live.

  - And how they relate to each other in memory.

  So when you think about the _Variable Environment_, just think about, where is the variable.

#### Code Example

function b() {
var myVar;
}

function a() {
var myVar = 2;
b();
}

var myVar = 1;
a();

_What will be the value of myVar?_

- The Global Execution Context is created.
  - myVar is assigned the value 1. (Global Variable Environment)
    - a(); is called.
      - myVar is assigned the value 2. (a(); Variable Environment)
        - b(); is called.
          - myVar is assigned the value undefined. (b(); Variable Environment)

This has something to do with _Scope_, which just means, where are we able to see the variable.

Each myVar variable, was declared in it's own Execution Context. Because, they are within a function, and everything time you call a function you get a new Execution Context.

Even though, myVar was declared 3 times, they are all distinct, they are all unique. Each with their own values, inside of their own Execution Contexts. They don't touch each other.

If, you were to console.log() each myVar, the output would be:

1
2
undefined

#### Example 2

---

function b() {
var name = "Vincent"
console.log(name)
}

function a() {
var name = "Debbie
console.log(name)
b();
}

var name = "Anthony"
console.log(name);
a();
console.log(name);

What will the output be?

Anthony
Debbie
Vincent
Anthony

Notice the 2nd console.log() below a(); returned "Anthony" again. This is because it is being logged, in the same _Variable Environment_. In this case, the **Global Environment**.

## The Scope Chain

---

function b() {
console.log(myVar)
}

function a() {
var myVar = 2
b();
}

var myVar = 1
a();

Output: 1

Remember, when an Execution Context is created, it also comes with some things, like the 'this' keyword, and a reference to the Out Environment.

Since we didn't declare a myVar variable in b(), it is checking it's Outer Environment for it. In this case, the Outer Environment being the Global, or Window Object.

myVar's value, inside of a(); is 2, and just because b(); is being called inside of a(); that does not mean that b(); somehow knows the value of myVar from a();. It is not b()'s Outer Environment, it is simply being called from there. b()'s Outer Environment, is LEXICALLY, inside of Global Execution Context.

The outer reference, is to the execution context for which the variable was created.
JavaScript will follow _UP_ the scope chain until it finds it. This is why it is important to understand, where things Lexically sit.

So, where a function physically sits, determines it's outer environment reference.
But as it's being executed, the execution contexts are stacking up, and running synchronously.

## Scope, ES6, and LET

---

### Scope

- Where a Variable is available in your code.
  - And if it's truly the same variable, or a new copy.

## Asynchronous Callbacks

---

### Asynchronous

- More than one at a time

If JavaScript is Synchronous, how does it handle, or allow Asynchronous events?

To understand this, you must look at the JavaScript Engine.
Apart from the JavaScript Engine, there are other things that are working, or running in the browser. Not just the JavaScript Engines. Things like:

- The Rendering Engine

  - That actually renders, or prints, or paints to the screen.'

- HTTP Request

  - Engines responsible for making HTTP requests, handling responses, or getting data.

- The JavaScript Engine has "hooks" that allow it to "talk" to the Rendering Engine and change what the page looks like, or go out and request data.

So while things in these other engines might run Asynchronously, the JavaScript Engine,
just the JavaScript Engine itself, is running Synchronously.

Remember, there is an Execution Stack, and it adds the new Execution Contexts that are being created, and as functions are being called, they are being run, stacked ontop of each other and as they finish they leave the stack.

This is also another list, or stack that sits inside the JavaScript Engine, which is the Event Queue.

The Event Queue is full of Events, or notifications of events thatmight be happening.
So when the browser, somewhere outside the JavaScript Engine, has an event that INSIDE the JavaScript Engine we want to be notified of, it gets placed on the Event Queue.

And depending on if there's a function that can respond to it, we can "listen" for that event on the event queue. Then the function will handle whatever it needs to for the event.

Either way, it gets placed on the Event Queue.

A _click()_ event for example, if someone clicks on the screen. What happens, if you have a function that is supposed to respond to that click() event? And maybe it also sends a Http request and is supposed to response when that request is finished?

When happens is, the _Event Queue_ gets looked at by JavaScript, when the _Execution Stack_ is **empty**.

When the execution stack is empty, it looks at what's in the Event Queue and determines if that function should be run, when that event was triggered.

So it see's a click event, it processes the click event and knows there's a function that needs to be ran, for that event.

It the creates the Execution Context for whatever function when that event happened.
That event is then processed, and the next item in the queue moves up and is processed.

Again, remember, the Event Queue doesn't run until the Execution Stack is empty. Until has finished running all the code, line by line.

So, it isn't _REALLY_ asynchronous. What's happening, is the browser, asynchronously is putting things into the event queue. While your code continues running, line by line, and when the Execution Stack is empty, THEN the Event Queue gets looked at, and executed.

Asynchronous Callbacks _are_ possible in JavaScript, but the asynchronous part is more about what's going on _outside_ of the JavaScript Engine.

## Types and JavaScript

---

### Dynamic Typing

- You don't tell the engine what type of data a variable holds.
  - It figure it out while your code is running.
    - Variables can hold different types of values because it's all figured out during execution.

In programming languages like Java or C#, they use something called _Static Typing_.
Meaning, you tell the Engine/Compiler ahead of time, what kind of data you intend to hold inside of a variable.

**Static Typing**
bool isNew = 'Hello'; // Throws an error

**Dynamic Typing**
var isNew = true; // No errors
isNew = 'yup!';
isNew = 1;

JavaScript is dynamically typed. This can be very powerful, but also come with issues if you don't understand how JavaScript deals with dynamic typing.

## Primitive Types

---

- A type of Data that represents a single value.
  - That is, not an object.
    - There are 6 Primitive Types in JavaScript

---

- Undefined
  - represents a lack of existence (you shouldn't set a variable to this)

---

- Null
  - represents a lack of existence (you _can_ set variable to this)

---

- Boolean
  - true or false

---

- Number
  - In JavaScript there is only one numeric type, _Number_
    - Unlike other programming languages, there's only one 'number' type.
      - It is a **_Floating Point_** number. (There's always some decimals)
        - This can sometimes make math weird.

---

- String
  - a sequence of characters
    - both '' and "" can be used

---

- Symbol
  - New in ES6
    - Not supported in all browsers yet..

---

## Operators

- An Operator is actually a special _function_ that is syntactically (written) different.
  - Generally, operators take _two_ parameters and return _one_ result.

For example, the "+" operator is actually a function.

var a = 3 + 4;

It takes two parameters, and returns a result, in the case of the "+" operator, it returns the two parameters added together.

These operators use what is called _infix notation_.

+3 4; // Prefix Notation
3 4+; // Postfix Notation
3 + 4; // Infix Notation

JavaScript uses infix notation as it is much more readable.

Same goes for asking a question, for example ">"

var a = 4 > 3; // Returns true

The ">" is also an operator, that is actually a function, taking in 2 parameters, and returning true or false.

It's important to remember, that when we use (+ - < >) that these are special types of operators, that are actually functions. They take in two parameters into those functions, and then a _Value_ is being returned.

Inside these functions, there is pre-written code provided by the JavaScript language, or the JavaScript Engine, to do, or run, or invoke these functions.

What's happening inside these functions is important to understand, especially when dealing with a dynamically typed language where you don't neccessarily know ahead of time, what type the variable is.

Just remember, _Operators_ are _Functions_

### Operator Precedence and Associativity

---

#### Operator Precedence

- Which operator function gets called first.
  - Functions are called in order of precedence.
    - Higher precedence wins.

---

#### Operator Associativity

- What order operator functions get called in.
  - Left to Right or Right to Left
    - When functions have the same precedence.

Left to Right = Left Associativity
Right to Left = Right Associativity

If you have multiple operators in a line of code, the Precedence tells you what gets called first.

But if some of them have the _same_ precedence, then what?
Depending on the _Associativity_ of that operator, it will either call the functions _Left to Right_ **OR** _Right to Left_.

---

## Coercion

- Converting a _Value_ from one type to another.
  - This happens quite often in JavaScript because it's dynamically typed.

var a = 1 + '2'; // Output: 12

Other programming languages may have thrown an error, but because JavaScript is dynamically typed, it attempts to figure out what you actually meant, or wanted.

## Comparison Operators

console.log(1 < 2 < 3) // Output: true

1 is less than 2, and 2 is less than 3

console.log(3 < 2 < 1) // Output: true

It is still returning _true_ even though, 3 is not less than 2, and 2, is not less than 1.
Why?

Remember the concept of Associativity.

3 < 2 // Output: false
false < 1 // Output: true

With type coercion, false is converted to 0

3 < 2 < 1 = false(0) < 1 = true

Boolean values, when converted to numbers are either 0 or 1.

True = 1
False = 0

undefined = NaN
null = 0

Although _null_ will coerce to 0 with less than or greater than operators, it doesn't coerce when doing _comparison_.

_Strict Equality_ (===) compares two things, but doesn't try to coerce the values.
If the two values, are not of the same _type_, it will just say no, false, they are _not_ equal.

In general, when comparing things in your code, try to compare things you _know_ are the same type, and also, in general, always use the === operator for comparisons. This can prevent some unexpected behavior caused by type coercion.

Don't use == unless you are _explicity_ want to coerce the two values.

Same goes for inequality,

- !== (strict inequality)
- != (inequality with coercion)

---

## Existence and Booleans

- How could Dynamic Typing and Coercion be useful?

You can use coercion to your advantage to check if something is there, or has a value.

if (a) {

}

The above if statement, will check if a, exists. Or has a value, if it does, then a is true, and will run the code inside the codeblock.

If a doesn't exist, or doesn't contain a value, it returns false. Remember coercion,

undefined = false
null = false
"" = false
0 = false

However, 0 also converts to false, which could be a problem. Because 0 doesn't mean lack of existence, it has a value, the number value of 0. But because of coercion, it converts it to false. Therefor, our if() statement would not run, because if a was assigned or returned a 0, a would be false. The 0, _may_ have been a valid value.

If for example, the case was that you were expecting 0, as a valid value, you could use the strict equality(===) operator.

if(a || a === 0) {

}

Remember, the === doesn't attempt to coerce, so 0 remains 0, the number 0. It doesn't coerce to false.

The logical or(||) returns true is either one is true or both are true.

if (false || true) {

}

Returns true, because one is true.

Generally, you wouldn't typically be expecting to use 0 as a valid value.

if(a) {

}

This is just checking for it's existence. It doesn't care WHAT it's value is, as long as a value exists, it returns true.

Remember, a _variable without a value is undefined_, and _undefined is coerced to false_.

This pattern of _coercion_ or _existence check_ can be very useful, and is used in many popular JavaScript frameworks and libraries.

---

## Default Values

## Framework Aside - Default Values

When including Libraries or Frameworks into your HTML document, the script tags are not seperate code. They are acted as if the pages of code are stacked ontop of each other, and is in a single JavaScript file.

Most often, in production environments, you often combine or minify your JavaScript code into one file anyway.

So it's important, that the individual files don't collide with one another. e.g. Variable Names, Function Names, ect.

window.libraryName = window.libraryName || "Lib 2"

Here we are are setting one files variable name to itself, which basically is checking to see if it has a value. It is doesn't, or wasn't delcared in another file or library, it would return false.
But because we also have this _Default Value_ of "Lib 2", it will instead return "Lib 2" and assign it to the variable libraryName.

The _Logical Or_ (||) operator doesn't just return either true or false, it also will return a default value if something doesn't have a value. For instance, code example above.

Of course, if libraryName did have an assigned value, it would then return thaat instead of the default value. This could result is an entire library missing. Something could or would be the developers fault. It's important to understand these concepts and pay attention to them as you see them.

---

## Objects and Functions

_Objects_ and _Functions_ in JavaScript, are **very** closely related. In fact they are almost the same subject.

---

### Objects and the "Dot"

Remember, Objects are a _collection_ of name/value pairs.
Those _values_ can also be other collections of name/value pairs.

Think about where an Object "resides" or "lives" inside of your computers memory.
An Object, is a collection of values that are given names.

What are these values?

- An Object can have _properties_ and _methods_.
  - Primitive value, _property_ // booleans, numbers, strings
  - Object value, _property_ // Another collection of name/value pairs
  - Function value, _method_ // Functions, inside a property are called _"Methods"_

"[]" Computed Member Access Operator
" . " Member Access Operator

---

### Objects and Object Literals

Using the Object literal syntax ( {} ) you can create an Object anywhere you want, on the fly.

It will be treated like any other variable.

function greet(person) {
console.log("Hi " + person.firstnae);
}

greet({
firstname: 'Vincent',
lastname: 'Eriksen'
})

Just like a variable, or any thing else, you can pass an object, created on the fly, as a function argument.

---

### Frameworks: Faking Namespaces

#### Namespace

- A container for variables and functions.
  - Typically to keep variables and functions with the same name seperate.

JavaScript, doesn't have _namespaces_.
In other programming languages, _namespaces_ exist, but because the nature of Objects in JavaScript, _namespaces_ aren't neccessary, we can fake it.

#### JSON and Object Literals

JavaScript Object Notation (JSON) is _inspired_ by Object Literal syntax.

Anything that is JSON valid, is also valid Object Literal syntax.
But not all Object Literal syntax, is valid JSON.
JSON has stricter rules on what it can be.

Any Object, you can run JSON.stringify and it will convert it to valid JSON.

console.log(JSON.stringify(objectLiteral));

Likewise, you can take a JSON string, and convert it to a valid JavaScript object.

var jsonValue = JSON.parse('{ "firstname": "Anthony", "isAProgrammer": true})

## Functions are Objects

### First Class Functions

- Everything you can do with other types you can do with functions.
  - Assign them to variables
    - Assign them to variables
      - Pass them around as parameters
        - Create them on the fly

---

#### Functions ARE Objects.

Functions, just like any other Object, reside in memory.
They have all the same features as regular Objects, but also have some other special properties.

You can attach properties and methods to a function.
Why? Because it's just an Object.

You can attach

- Primitive
- Object
- Other Functions

In JavaScript, Functions have some hidden special properties, 2 important ones..

- Name, optional or can be anonymous
- Code, Where the actual lines of code, you have written, sit.

So, the _code_ that you write, gets placed into a _special_ _property_ of the _function_ _object_.

So, the code that you write, isn't the actual _function_, it is a _property_, of the _function_ _object_.

What's special about the _code_ property, is that it is _invokable_.
Meaning that, you can tell it to run this code, the code sitting on that property, and thats when the _execution_ _context_ is created.

It is _REQUIRED_, and _IMPARATIVE_ to know this _concept_ of _Functions **ARE** Objects_, and to keep this mental model in your mind.

You have to think of a _Function_ as an _Object_, whose _code_ just happens to be one of the _properties_ of that _Object_.

---

## Function Statements and Function Expressions

### Expression

- A unit of code that results in a value.
- It doesn't have to save to a variable.

A function _statement_ just does "work".
A function _expression_ or any expression in JavaScript, ends up creating a value. That value doesn't _have_ to be saved inside a variable.

---

### By Value vs By Reference

In both cases we are talking about _variables_.

var a = 3
a and it's value is set to a position in memory
b = a
If we were to assign _a_ as a value of another variable, _b_ would be saved in memory, and it's _value_ would save a _copy_ of that a value.

This is called, _By Value_

If you store an Object, you still get a location, or an address stored in memory, where that variable knows where that object lives.

a = {}
_a_ stores the Objects location in memory. eg 0x001

b = a
_b_ would not create a new location for the same value, but _point_ to the same location as _a_ eg 0x001

Instead, now 2 names, point to the same address.
This is called, _By Reference_

It's important to remember that **ALL** objects, are by reference.

---

### Mutable

- To change something.
  - "Immutable" means it _can't_ be changed.

That's all this means!

---

// By Value (primitives)

var a = 3;
var b;

b = a;
a = 2;

console.log(a); // 2
console.log(b); // 3

Even though we gave _a_ a new value, primitive types create a _copy_.
So when we call _b_, it's still storing the original _a_ value.

// by reference (all objects(including functions))

var c = {greenting: 'hi'};
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c) // Hello
console.log(d) // Hello

This is _By Reference_
_c_ and _d_ are both _pointing_ to the same location in memory.
So they both return the same updated or _mutated_ value.

So Objects, because they are _reference_ types, when you change one of them, you change _all_ of them.

This also happens to parameter in functions.

// by reference (even as parameters)
function changeGreeting(obj) {
obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c); // Hola
console.log(d); // Hola

The equals operator sets up _new_ memory space. (new address in memory)

c = {greeting: 'howdy'};
console.log(c) // howdy
console.log(d) // hola

This is a special case where _by reference_ doesn't apply. Because the _equals operator_ is setting _c_ in a new space in memory.
_d_ is still pointing to the original address for _c_ in memory, while _c_ created a new one because of the equals operator, and thus points to the new value stored in that new address.
