// Object Oriented Programming
// idea that advocates programming based on real world objects
// CLASSES vs OBJECTS
// CLASS is a blue print of an object
// OBJECT is an instance of  class ~ they have properties
// syntax ~ no plural names
// five main concepts: instances; abstraction; polymorphism; inheritance; encapsulation
// Methods have behaviours and methods -->
// A method defines what it does to itself or to others.
// in order to access the parameters above we use the this keyword
// the new keyword calls a fucntion tells JS to create a new instance of the constructor
// an instance refers to the values of a class
// the new keyword is a constructpor which initializes and object

// the below are static
// our object called dance and its properties
// let dance = {
//     style: "rythm",
//     tempo: "fast",
//     name: "break-dance",
//     origin: "USA",
//     music: "hip-hop",
//     age: "40",
//     type: "urban-youth"    
// }

// dot notation to access the properties of an object
// console.log(dance.name)

// let school = {
//     teacher: 15,
//     students: 50,
//     subjects: 12,
//     buildings: 4,
//     name: "Greenest Hills",
//     // this is a method
//     performance: function() {
//         // this is a behaviour
//         return("We always pass our students in first class.")
//     },
//     sports: () => {
//         return("The current champions of Wakiso district!")
//     }
// }

// console.log(school.performance())
// console.log(school.sports())
// console.log(school.name)

// there are also dynamic classes/objects ~ note: a function is a first class object
// function car(name, model, chNo, seat) {
//     this.name = name
//     this.model = model
//     this.chNo = chNo
//     this.seat = seat
//     this.activity = () => {
//         return("I am a Subaru and I like to race!")
//     }
// }
// the (this.) keyword identifies properties of a class
// we use the keyword new to instantiate (create) an object
// let myCar = new car("Subaru", 2022, "x1122", 5)
// console.log(myCar.activity())

// function book(name, author, year) {
//     this.name = name
//     this.author = author
//     this.year = year
//     this.pub = "Ozzy Ltd"
// }
// let yourBook = new book("Coder Girls", "Alinda", 2022)
// let myBook = new book("Art of Code", "Osman", 2020)
// console.log(myBook.name + " by " + myBook.author + " published by " + myBook.pub + " in the year " + myBook.year)

// a constructor is a function that creates a new object, they are defined with a capitalised name
// constructors use the keyword <this> to set properties of the object they will create
// inside the constructor <this> refers to the new object it will create
// constructors define properties and behaviours
function Shoe(brand, style, color, size) {
    this.brand = brand 
    this.style = style
    this.color = color
    this.size = size
}
// own properties are defined directly on the instance object -> eg brand or style
// when a constructor function creates a new object -> an instance of its constructor
let myShoe = new Shoe("Bata", "Mocassin", "Black", 11)
// instanceof returns true if the object was created with the constructor -> compares an object to a constructor
console.log(myShoe instanceof Shoe)
// console.log("My shoe is a " + myShoe.color + " " + myShoe.style + " size " + myShoe.size + " from " + myShoe.brand)

// another way to define a function - arrow functions
// let sum = () => {

// }

// turn the arrow function into an object
// let baby = (name, weight, gender, yob) => {
//     this.bName = name
//     this.bWeight = weight
//     this.bGender = gender
//     this.bYob = yob
// }

// let myBbay = new baby("Susan", 5, "F", 2020)
// let father = baby.this.father = "Papa Baby"

// class book {
//     constructor(name, author, year) {
//         this.name = name
//         this.author = author
//         this.year = year
//         this.pub = "Ozzy Ltd"
//     }
// }