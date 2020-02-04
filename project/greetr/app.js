// JavaScript: Understanding the Weird Parts by Anthony Alicea
// Project: Build your own Framework - "Greetr"

// INSTRUCTIONS

// - When given a first name, last name, and optional language,
// it generates formal and informal greetings.

// Should support both English and Spanish Languages

// It needs to be Reusable, and not interfere with any other framework or code.

// Should have an easy to type structure. Example: 'G$()' structure.

// Greetr should support jQuery.


// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function () {

  // create a new 'Greetr' object (let's pretend we know the name from the login)
  var loginGrtr = G$('John', 'Doe ');

  // hide the login on the screen
  $('#loginDiv').hide();

  // fire off an HTML greeting, passing the "#greeting" as the selector aswell as the chosen language, and then log the welcome.
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})