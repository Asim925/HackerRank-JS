// First code of JAVA-SCRIPT
// printing hello world
console.log("Hello World");

// variable
let me = "asim";
console.log(me);
// constants
const water = "H2O";
console.log(water);
// variable {both properties are been shown here}
let person = {
  age: "30",
  color: "red",
};
//pointing a property
person.color = "green";
// printing
console.log(person);

// Array
let colors = ["red", "blue"];
// adding another element manually
colors[2] = "black";
console.log(colors);
// printing one of them
console.log(colors[1]);

// Function
// name and lastname are paramater while there values are arguments
function greet(name, lastname) {
  console.log("hello " + name + lastname);
}
greet("Asim ", "Nazeer");
