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

---

### Objects, Functions, and 'this'

Remember, when a fucntion is _invoked_ a new Execution Context is created.
Don't confuse this with the Object. The function object sits in memory, but when that _code_ property is invoked, a new _execution context_ is created and put on the _execution stack_. This determines HOW that code is run, or executed.

Think of the _Execution Context_ as focusing on the _code_ property.

So what happens when that code is run?

- A new Execution Context is created.
  - Each Execution Context has it's own _Variable Environment_
    - It has a reference to it's outer lexical environment.
      - Gives us a special variable _this_.

_'this'_ will be pointing at a different object, depending on how the function is invoked.
There are a few scenarios where _'this'_ can change, depending on how the function is called.

When you are simply creating a function, wether it be a function statement, or function expression, _'this'_ will still be pointing to the _Global Object_.

Even though, the functions create their own Execution Context, _'this'_ will still point to the Global, or Window object.

Inside of these functions, you can create new variables, and attach them to the Global Object.

function a() {
console.log(this)
this.newVariable = 'hello'
}

a(); // Window Object
console.log(newVariable) // 'Hello'

Using the _dot notation_ you can create new variables and assign it values. Which also, are key/value pairs, because _'this'_ is pointing to an _Object_, in the above example, the _Global Object_

So, when you are just invoking the function, _'this'_ points to the Global Object.

In the case, that a _function_ is _attached_ to an _object_ as a _method_, the _'this'_ keyword points to the _Object_. The _Object_ that, that _method_, is _sitting inside_ of.

var c = {
name: 'The C Object',
log: function () {
console.log(this);
}
}

c.log(); // The C Object

---

var c = {
name: 'The C Object',
log: function() {
this.name = 'Updated C Object';
console.log(this);
}
}

c.log(); // 'Updated C Object'

We are invoking the _log()_ method, inside of the _c_ object. Inside of that method we are changing the _name_ property using _'this'_. Because we are using _'this'_ inside of a method, of the object, _'this'_ now points to that object instead of the global object.

You can _mutate_ or _change_ the properties of an object, using methods contained inside that object, using the 'this' keyword.

This is a very common pattern to use.

There is a "bug" or a widely thought "wrong" thing in JavaScript.

var c = {
name: 'The C Object',
log: function() {
this.name = 'Updated C Object';
console.log(this);

    var setname = function(newname) {
      this.name = newname;
    }
    setname('Updated again! The c Object');
    console.log(this)

}
}

The first code in the log method still logs to the console. The _setname_ function doesn't seem to do anything. But it actually, attached itself to the Global Object.

When using another function, inside of a method, and using the 'this' keyword, instead of pointing to the containing object again, it points to the Global Object.

What you can do, to avoid this kind of behavior, is setting 'this' to a new variable inside of the first method. Then using the variable name, in place of the _'this'_ keyword. So even in your _sub functions_, this, is _bound_ essentially, to the variable, which was declared when _'this'_ was still pointing to the object.

var c = {
name: 'The C Object',
log: function() {
_var self = this;_
self.name = 'Updated C Object';
console.log(self);

    var setname = function(newname) {
      self.name = newname;
    }
    setname('Updated again! The c Object');
    console.log(self)

}
}

Examine the above code carefully, it's important!
This is a very common pattern!

No programming language is perfect, they all have their quirks. JavaScript definately isn't an exception. There are patterns we can use to get around any problems the language may have.

Though, above is a very common pattern you'll see in many production applications. However, the _let_ keyword, is meant to clear some of these problems up.

#### Summary

- The _'this'_ keyword points to the _global object_ when you are just invoking a function.
  - If the function, is a method of an object, the _'this'_ keyword points to the object.
    - However, any _internal_ functions have an issue, and point to the global object. So we can set a variable to 'this' inside the scope of the object, and use the new variable throughout our internal functions to continue pointing to the parent object.

### Arrays - Collections of Anything

Arrays can store anything

- strings
- booleans
- numbers
- more arrays
- objects
- functions (which are just objects)

var arr = [
1,
false,
{
name: 'Anthony',
adderess: '111 Main St.'
},
function (name) {
var greeting = 'Hello ';
console.log(greeting + name)
},
'hello'
]

console.log(arr)
arr[3](arr[2].name)

---

### 'arguments' and SPREAD

When a function is called,

- Execution Context is created.
  - Variable Environment is created.
    - 'this' keyword is created.
      - A reference to the Outer Environment is created.
        - 'arguments' list is created.

The 'arguments' list, contains all the values, of all the arguments, in our function.

#### Arguments

- The parameters you pass to a function
  - JavaScript gives you a keyword of the same name which contains them all.

In JavaScript, you can call a function, without passing to it any values to it's arguments. In other languages you cannot do this, but in JavaScript you can.

Why?

Because of "Hoisting". Remember, when the Creation phase runs, variables, and functions are stored into memory. This is true for arguments. They are given a default value until the execution phase where the values are then read, and stored. The default value for these variables is _undefined_.

Because of this, it allows our functions to run without values being passed to the arguments it's expecting, because these arguments already have a value initially, _undefined_.

So this means you can skip, passing any parameters, or passing only _some_ of the parameters, and JavaScript is okay with that.

This allows some interesting, and powerful features. For example, you can set a default parameter.

function greet(firstname, lastname, language = "en") {
console.log(firstname)
console.log(lastname)
console.log(language)
}

greet();

---

Above, we are setting a default parameter. So it's saying, "if you don't give me a value, that I will use the default one, otherwise, use the one passed in the function call."

However, setting defaults inside the argument's list isn't supported yet on all browsers.
Instead you can setup defaults inside the function body.

---

function greet(firstname, lastname, language ) {

language = language || 'en';

console.log(firstname)
console.log(lastname)
console.log(language)
}

There is another special keyword, that JavaScript has setup for us, kind of like the _'this'_ keyword, called _'arguments'_.

You can console.log(arguments) and it will contain all _list_ of all the _arguments_ you passed.

The _arguments_ list may look like an _array_, but the brackets are slightly italicized. This is how the JavaScript Engine tells and argument list. They are _Array-like_ but are not _arrays_.

It looks and acts like an _array_ but it doesn't have all of the JavaScript features, that _arrays_ have.

Some people are upset about this and feel they should just be regular arrays. But, that's how the JavaScript Engine works.

But, an _argument_ list acts enough like an _array_, you can almost use it like a normal array in most circumstances.

For example, you can use the .length method on _arguments_. Adding a check to see if no arguments are passed, to not run the function.

function greet(firstname, lastname, language) {

language = language || 'en';

if (arguments.length === 0) {
console.log('Missing Parameters!')
console.log('------------------');
return;
}

console.log(firstname)
console.log(lastname)
console.log(language)
console.log(arguments)
console.log('------------------');
}

greet(); // 'Missing Parameters!'
You can also access specific argument values, like arrays using bracket notation,
e.g.
console.log(arguments[0])

The console.log would return the firstname parameter value.

Although, as time goes on _arguments_ will become _deprecated_ which means it won't be the best way to do something anymore.

The new thing, in ES6, is called the _Spread Operator_.

function greet(firstname, ...other) {

}

greet('Anthony', '111 Main St.', "Boise")

The _spread operator_ will take the extra parameters, and create a new array with them stored in it. Storing in the "other" array. This is the preferred way of handling arguments to functions.

---

### Function Overloading

In other programming languages, You can have functions with the same name, and a different number of parameters. This doesn't really work in JavaScript because functions are Objects.

That functionality isn't available

One way, to deal with this, and having simpler function calls, you can create additional functions...

e.g.

function greet(firstname, lastname, language) {
if ( language === 'en') {
console.log('Hello ' + firstname + ' ' + lastname)
}
if ( language === 'es') {
console.log('Hola ' + firstname + ' ' + lastname)
}
}

function greetEnglish(firstname, lastname) {
greet(firstname,lastname, 'en');
}

function greetSpanish(firstname, lastname) {
greet(firstname,lastname, 'es');
}

greetEnglish('Anthony', 'Eriksen') // Hello Anthony Eriksen
greetSpanish('Anthony', 'Eriksen') // Hola Anthony Eriksen

You can use this pattern to simply function calls, and remove some of the need to always pass multiple arguments by creating seperate functions, with default values for some parameters, and requiring less be passed into the function.

---

## Syntax Parsers (Conceptual Aside)

Remember that the code you write, isn't directly run on the computer.
There is an intermediate program that translates your code, into something the computer can understand.

A syntax parser will go through your code, character by character, making assumptions on what you are intending.

It can even change your code, before it's even executed. This is exactly what happens in certain situations, and so it's _important_ to understand how the JavaScript Engine, is reading your code.

- Character by character, using a set of rules for what's _valid_ syntax, and deciding what it is that you intend. This all happens before your code is even executed, so it can make changes if it wants, to the code you've actually written.

## DANGEROUS ASIDE: Automatic Semicolon Insertion

The syntax parser, does something to try and be helpful. Semicolons, are optional in core JavaScript. You don't _have_ to put a semicolon.

The JavaScript Engine reads your code character by character. When it ends to the end of a line, it looks for a semicolon. If it doesn't exist, it will _insert_ one for you.

A carriage return, is an actual syntax, that you cannot physically see. It is there, each time you hit _enter_ to goto the next line. When the JavaScript Engine sees this _carriage return_ it assumes that the code is finished on that line, and adds a _semi-colon_.

SO anywhere the syntax parser _expects_ a semicolon would be, it will put one for you.
This is why it's "optional". Not because it ACTUALLY is optional, but because the Engine will insert one for you.

It's important to always insert your own semicolons, and never like the JavaScript Engine to do it for you.

e.g.

function getPerson() {

return
{
firstName: 'Anthony'
}
}

console.log(getPerson()); // Undefined

When the Syntax Parse read through your code, it seen the return statement, followed by a _carriage return_ and automatically inserted a semicolon. This can be _extremely_ dangerous. This is why it is important to always add your own carriage returns.

Some IDE extensions, will reformat your code _onSave_ and avoid some of these issues. It is still important to write the code in the way YOU intended it to be written, and _not_ rely on extensions as workarounds.

Just remember, to always put a semicolon where there should be one. Otherwise, Automatic Semicolon Insertion can cause _a lot_ of problems, and can be _hard to track down_.

---

### Whitespace

- Invisible characters that create literal 'space' in your written code.
  - _Carriage returns, tabs, spaces._

We cannot see these characters physically, for purposes of readability. But that doesn't mean they are not there.

JavaScript's syntax parser, is very liberal on what it allows for whitespace.
We can take advantage of it, when using whitespace in our written code.

You should take advantage of this, and comment up your code, to make it more readable.
You will see many popular frameworks and libraries take advantage of whitespace, and can make the code look a little weird. Don't be afraid of this, just take a step back, and you'll notice it's still all very simple, the comments are ignored by the JavaScript Engine.

---

### Immediately Invoked Function Expressions (IIFE)S

Let's you run the function, at the point that you create it.

var greeting = function(name) {
return 'Hello ' + name;
}('Anthony');

console.log(greeting);

The _greeting_ variable will return the value, in this case the string "Hello Anthony".
Instead of returning the function, or needing to be called, it is called immediately after creation, and the variable then store the value that is returned by the function.

var firstname = "Anthony";

(function (name) {

var greeting = 'Inside IIFE: Hello';
console.log(greeting + ' ' + name);
}(firstname))

Above, is proper IIFE. You will see this form, pattern, or syntax, in almost every popular JavaScript framework or library.

Keep in mind, you are just executing code on the fly. You are just executing code, after you create it.

---

### IIFEs and Safe Code

When wrapping a function, in parenthesis, or creating it on the fly, and executing it immediately after creation, it you are creating a new execution context. Within that function, all of your code is then _scoped_ to that function execution context, or variables _scope_ to that _variable environment_.

This is an extremely powerful tool for using functions. If you were to open the source code of most of the popular frameworks and libraries, the first thing you might see if a parenthesis, to wrap the corresponding code, into it's own execution context.

Doing this can prevent clashing of existing code, or other libraries.

Remember, when you are importing a library, it isn't seen as a seperate file. It is seen as 1 file, with all the code, stacked on top of each other.

Using these IIFEs can help keep code wrapped, leaving some code, or intentional code, _scoped_ to the context of your choosing. Controlling the scope of variables is crucial part of JavaScript.

But what if you wanted to attach something within you function _to_ the global object?

Well, you can pass objects in as parameters, so you can pass in the global object to your parameters, and attach or override existing values on it.

Remember, the global object in the browser is the _Window_ object.

---

(function(global, name) {
var greeting = 'Hello';
global.greeting = 'Hello';
console.log(greeting + ' ' + name);
}(window, 'Anthony'));

console.log(greeting);

---

Here, I am declaring a "global" parameter, and passing the _window_ object into it. I now, have access to the _window_ object, and can change or mutate things as I might need.

So that's, Immediately Invoked Function Expressions, and _safe_ code.

---

## Understanding Closures

function greet(whattosay) {

return function (name) {
console.log(whattosay + ' ' + name)
}
}

var sayHi = greet('Hi');
sayHi('Anthony');

**What is happening here**?

- _Global Execution Context_ is created, greet function stored in memory.

  - Then, we _invoke_ the greet() function, and the _whattosay_ variable, is _stored_, in it's _variable environment_, which is the greet() function.

    - Once we hit the return statement, it returns a function, and the greet() _execution context_, is _popped off the stack_, **it's gone**.

    **Remember**, **every** _Execution Context_ has this space in memory, where **all** the _variables_ and _functions_ created inside of it live.

    Under _typical_ conditions, that memory space would be erased, or replaced through a process called "_Garbage Collection_".

    But at the moment that **Execution Context** _finishes_, that memory is still there.

    and every execution context, has a _reference_, to it's _outer environment_...

    So when we call the now _sayHi()_ function, and pass it it's _name_ parameter, it still has access, to the _whattosay_ variable in memory.

    Because once we called the sayHi() function, a new execution context is created, along with a reference to it's outer environment.

    The _execution context_ has _closed in_ the variables it would have access to in it's _outer environment_. Even though, those execution contexts are gone.

    So this process, of it closing in variables it's supposed to have access to, is called, a **CLOSURE**.

    _Closures_ are simply a _feature_ of the JavaScript programming language. They just happen.

    It doesn't matter _when_ we invoke a function, it doesn't matter if the outer function is still running, the JavaScript Engine will make sure that whatever function is running, still has access to the variables that it is supposed to. It's _scope_ is intact.

**Closures** are a feature of the language, that are extremely powerful, and important.

We, as JavaScript developers, rely on **Closures**. Alot!!

**Closures** are not all that complicated, and when you know how JavaScript works under the hood, _closures_ just make sure our functions work as they are supposed to.

That it has access, to the variables in it's outer environment, and it doesn't matter, if those functions have finished running or not.

You will sometimes hear "I created a closure".... The JavaScript Engine creates the closure, we are just taking advantage of it.

---

### Understanding Closures pt. 2

If you research _closures_ online, you will likely run into this example, as far as why closures can make your code hard to anticipate.

But it isn't really that true, when you understand what's going on under the hood.

---

function buildFunctions() {

var arr = [];

for (var i = 0; i < 3; i++) {

    arr.push(
      function () {
        console.log(i)
      }
    )

}

return arr;
}

var fs = buildFunctions();

fs[0](); // Output: 3
fs[1](); // Output: 3
fs[2](); // Output: 3

---

Why do all 3 of the function calls, output 3?

Because the value of i, is 3, at the time of invocation.

When this code runs, first always, a Global Execution Context is created.
Then, when buildFunctions() runs at fs, it creates a new Execution Context, it creates an empty array assigned to the variable arr, and then see's a for loop.

When the for loop runs, it pushes a function, to the array. Inside the function, is just a console.log that logs i. The for loop, doesn't stop iterating, UNTIL i = 3. Once i's value is 3, it exists the for loop, and returns arr.

So when we call these functions, on fs[], it is invoking the function, creating a new execution context, and a reference to it's outer environment, and since it doesn't find i, within the function body, it goes up the scope chain, to it's outer environment, which was buildFunctions. It finds i, and logs it to the console.

It is logging, the most CURRENT value of i, because the function, isn't being invoked until later, until AFTER the buildFunctions was ran, and the i in the for loop reached 3, exited the loop, and returned the array back.

THIS IS VERY SIMPLE, ONCE YOU UNDERSTAND WHAT IS HAPPENING UNDER THE HOOD. IT IS NOT DIFFICULT. IT JUST SEEMS LIKE IT. BUT IF YOU TAKE A STEP BACK, AND REALLY THINK ABOUT WHAT IS GOING ON, UNDER THE HOOD, YOU'LL REALIZE IT MAKES PERFECT SENSE, AND THAT IT ISN'T THAT DIFFCULT OR CONFUSING AT ALL.

I IS 3, BY THE TIME YOU CALL THE FUNCTIONS!

A free variable, is a variable that is outside, but you have access to.

---

What if you wanted it to print out each i?
Well, with ES6, there is the new _let_ variable.

_let_ is block scoped, and each time let is changed, it creates a new spot in memory. So each, iteration, will save to the let variable, in a new spot in memory.

---

function buildFunctions() {

var arr = [];

for (var i = 0; i < 3; i++) {

let j = i // Let, in each interation, creates a new spot in memory.

    arr.push(
      function () {
        console.log(i)
      }
    )

}

return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

---

So now, when i is set to 0, and j is set to i, using the let variable, when the function pushes to the array, and references j in the console.log, j, will have saved the value of that current block when it was declared, or changed.

---

The other way to preserve the value of i, in an ES5 manner, would be to use an IIFE. That is, instead of calling it later in the file, you immediately call it, passing in i, as the argument.

---

function buildFunctions() {

var arr = [];

for (var i = 0; i < 3; i++) {

    arr.push(
      (function (j) {
        return function() {
          console.log(j)
        }
      }(i))
    )

}

return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

---

Now that you are immediately invoking this the function, and passing i in as a parameter, on each iteration, it's going to execute the function, passing in the value of i. So passing 0, then 1, and so on. Then, it will log the current running index value for that execution context.

It may look scary, but we are going to push to an array, the result, of executing the function.

When the loop starts, i = 0, it then pushes a function, with a j parameter, and immediately calls that function, using the value of i, to pass down into the return function, to log j to the console, which j's value, is the current value of i, at the time of execution.

In short, it is pushing the RESULT of the function.

---

### Function Factories

A _Function Factory_ is just a function, that returns, or makes other things or functions.

---

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

---

Instead of passing _language_ to the _inner function_, we are passing it to the _outer function_, and then _returning_ the _inner function_.

So the _language_ variable, will be _trapped_, in the **Closure**.

When we try to _reference_ language, _inside_ the _inner function_ object, it will look _up_ the _scope chain_.

Even though the _makeGreeting execution context_ is done, it is gone, it will _still have access_ to the _language_ variable.

---

- Make greeting executes
- 'en' is the language in the first case
- and it will return a function
- that functions outer reference will point to what the      language was when makeGreeting was executed.
- So the function that was returned will still point, to     the language variable 'en'.
- Because when makeGreeting was executed it was it's own     execution context.

Then we executed makeGreeting again, which creates a NEW execution context,and this time the language 'es', is stored in a different spot in memory.

So the function that returns from there, it will point, at THAT execution context.

So even though these functions, lexically sit inside the same makeGreeting, they are going to point at 2 different spots in memory, because they were created during 2 different execution contexts.

