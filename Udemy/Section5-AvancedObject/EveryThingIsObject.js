/*
  * Every JavaScript object has a prototype property, which makes inheritance
  possible in JS
  * The prototype property of an object is where we put methods and properties
  that we want other objects to inherit;
  * The Contructor's prototype property is NOT the prototype of the Contructor
  itself. It's the prototype of ALL instances that are created through it
  * When a certain method (or property) is called, the search starts in the object
  itself, and if it can't be found, the search moves on to the object's prototype.
  This continues until t he method is found: prototype chain.
*/

