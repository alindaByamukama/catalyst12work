function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
//  The following code adds all of the own properties of canary to the array ownProps
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property)
    }
  }
  // console.log(ownProps)

// Properties in the prototype are shared among ALL instances of Bird
function Dog(name) {
  this.name = name;
}
// prototype properties are defined on the prototype
Dog.prototype.numLegs = 2;
// Only change code above this line
let beagle = new Dog("Snoopy");
// console.log(beagle.numLegs)

// add duck's own properties to the array ownProps and
// prototype properties to the array prototypeProps
let duck = new Bird("Donald")
// let ownProps2 = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }
// ["name"]
// console.log(ownProps);
// ["numLegs"]
// console.log(prototypeProps);

// the constructor property is a reference to the constructor function that created the instance
// possible to check for this property to find out what kind of object it is
// returns true
// console.log(duck.constructor === Bird); 
// console.log(beagle.constructor === Dog);
// the constructor property can be overwritten
// it’s generally better to use the instanceof 
// method to check the type of an object

// manually setting the prototype to a new object erases the constructo proerty!
// so remember to set the constructor property
// Bird.prototype = {
//   constructor: Bird,
//   numLegs: 2,
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name); 
//   }
// };

// an object inherits its prototype directly from the constructor function that created it
//  You can show this relationship with the isPrototypeOf method
// console.log(Bird.prototype.isPrototypeOf(duck));
// returns true

// all objects in JS have a prototype, and prototype itself is an object
// because prototype is an object it can have its own prototype!
console.log(typeof Bird.prototype)
console.log(Object.prototype.isPrototypeOf(Bird.prototype))
// the prototype of Bird.prototype is Object.prototype
// prototype chain -> Bird = supertype for duck -> duck = subtype
// object = supertype for Bird and duck -> Object = supertype for ALL objects in JS
// any object can use the hasOwnPorperty method

// supertype = parent and subtype = child
// Object.create(obj) creates a new object, and sets obj as the new object's prototype
// you can manually set the constructor property
// Bird.prototype.constructor = Bird
// duck.constructor