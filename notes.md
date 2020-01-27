# JavaScript - Understanding the Weird parts

## Syntax Parsers

### A program that reads your code, and determines what it does and if it's grammar is valid

When you write _JavaScript_, it isn't magically telling the computer what to do. You are being abstracted away from all of that. You're writing code that someone else, or other people, built programs that convert your Javacript, into something the computer can understand. Often times these are called **_Compilers_**.
At times, it also may have to do with **_interpreters_**.

It's these _tools_ that actually do the work, of reading your code, character by character, and determining if the Syntax is valid, and implementing it, in a way that the computer can understand.

## Lexical Environments

### Where something sits _physically_, in the code your write

The word _Lexical_ means, _having to do with words or grammar_. A **Lexical Environment**
exists in programming languages inwhich **where**
you write something is _important._

When talking about _Lexical Environments_, we are talking about **where it's written**, and **what surrounds it**.

## Execution Contexts

### A wrapper, to help manage the code that is running

There are lots of _lexical environments_. Which one is _currently_ running is managed via **Execution Contexts**.

### Just remember, the concepts explained, are **IMPORTANT**

## Name/Value Pairs and Objects

### When writing _JavaScript_, **Objects** are very **important**. You must _understand_ what an _Object_ is, in regards to _JavaScript_ itself

First, you must understand the term Name/Value Pair. It's quite simple...

A name which represents maps to a unique value.

The name may be defined more than once, but only can have one value in any given context.

The value may be more name/value pairs. (Objects inside Objects)

## Object

### An object, is a collection of name/value pairs

This is the simplest definition when talking about JavaScript.

Other programming languages may have more complex concepts when it comes to Objects, but in JavaScript, they are just a **collection of name/value pairs**.

Don't think any more deeply about objects in JavaScript than this.

## The Global Environment and Global Scope

Whenever code is run in JavaScript, it is run inside an **Execution Context.**

A wrapper, that the JavaScript Engine, (_the program that other people wrote (Parser, Compiler)_), wraps the code, into an _Execution Context_. This is the Global _Execution Context_. The base _Execution Context_.

Global, meaning it's _accessible_ from **ANYWHERE** in your code. It's _Global_.

The Global Execution Context creates 2 things for you,

#### The Global Object

#### The variable 'this'

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

The reason JavaScriptbehaves the way it does, the way that variables and functions are at some degree available even though they are written later in the code, is because the _Execution Context is created in two phases._

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

### All variables, in JavaScript, are initially set to 'Undefined'
