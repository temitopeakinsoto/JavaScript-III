/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* 1  When the this keyword is globally used the this object refers to the Window object


* 2. When a function is called using the dot notation, the object before that dot is 'this'. 
     therefore when this is used with and object, then 'this' refers to or points to the object's methods and properties attached to that object


* 3. Whenever a constructor function is used (and instatiated using the new keyword), 'this' refers to the specific instance of the object that is created and returned by 
     the constructor function.


* 4. Whenever the call() or apply() method are used, 'this' is explicitly defined, allowing you to execute a function in different context!
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greet(name) {
    console.log('Hello ' + name);
    console.log(this); // refers to window object
}
//greet('Temi');

// Principle 2

// code example for Implicit Binding
var greet = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);// refers to greet method
    }
}
//greet.speak('Temi');



// Principle 3

// code example for New Binding
function Greet(name) {
    this.name = name;
    this.greeting = 'Hello ';    
    this.speak = function() {
        return `${this.greeting}, my name is ${this.name}`;
        console.log(this);
    }
};

var greetTemi = new Greet('Temi');
var greetTope = new Greet('Tope');

//greetTemi.speak();
//greetTope.speak();

// Principle 4
//The this 

function baz(name, age) { 
    return name + ' your age is ' + age;
  }
  
  baz.call('banana', 'Shaun', 35); // 'this' is fixed to banana at invoaation of the baz function
  baz.apply('banana', ['Shaun', 35]); // 'this' is fixed to banana at invoaation of the baz function
  var copyOfFunction = baz.bind('banana'); 

