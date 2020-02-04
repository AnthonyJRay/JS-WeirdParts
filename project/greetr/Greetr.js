// Wrapping code for "safe code"
(function(global, $) {
  // 'new' an object
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'es'];

  // informal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  // logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  };

  // prototype holds methods (to save memory space)
  Greetr.prototype = {
    // 'this' refers to the calling object at execution time
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      // check for valid language
      // references the externally inaccessible 'supportedLangs' with the closure.
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid Language';
      }
    },

    // retrieve messages from object by referring to properties using [] syntax.

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // chainable methods return their own containing object
    greet: function(formal) {
      var msg;
      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      // make chainable
      return this;
    },

    setLang: function(lang) {
      // set the language
      this.language = lang;

      // validate
      this.validate();

      // make chainable
      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'Missing jQuery selector';
      }

      // determine the message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      // inject the message in the chosen place in the DOM
      $(selector).append(msg);

      // make chainable
      return this;
    }
  };

  // the actual object is create here, allowing us to 'new' an object without calling 'new'
  Greetr.init = function(firstName, lastName, language) {
    var self = this;

    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  };

  // Point function prototype to Greetr
  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  // Attach Greetr to the Global(window) Object
  // On the Global Object, "Greetr" and "G$" will point to the Greetr function.
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
