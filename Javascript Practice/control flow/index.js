// array length :-
// const array = ["", 1, 2, 3];
// console.log(array.length);

// ======================================= //
// if-else statements
/* conditions are 
if time is between 6 and 12 , then print Good morning! 
if time is between 12 and 6 , them print Good afternoon!
else good evening*/

// if-else

/*let hour = 3;

if (hour >= 6 && hour < 12) console.log("Good Morning");
else if (hour >= 12 && hour < 6) console.log("Good Afternoon");
else console.log("Good Evening"); */

// ========================= //

// SWITCH statements

/* let user = "guest";

switch (user) {
  case "guest":
    console.log("guest - user");
    break;

  case "member":
    console.log("Member");
    break;

  case "head":
    console.log("Head");
    break;

  default:
    console.log("unknown user");
} */

// ========================= //

// FOR lOOP
// .....for(initialize ; condition ; increment or decrement operator )....

/*let i;
for (i = 0; i < 5; i++) {
  console.log("Hello");
}*/

// for printing odd values by looping
/* let i;
for (i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);  ,,// agr i ko 2 se divide krne pr remainder na bache to woh odd numbers
} */

// ========================= //
// WHILE loop
// { while(condition) <== SYNTAX }
/* let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
} */

// ========================= //
// do-while :-

// let i = 7;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// ========================= //
// Infinite loop :-

/* ..loop infinite tb hota ai jab condition poori
 hi na horahi ho jaise i is less than 5 but 
 no increment or any other operration is done ..*/

/* let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
} */

// ========================= //
// for-in loop :-

/*is main ye hai ke jab ap ko value nahi balke 
property print karwani ho to for in use karo*/

// NO. 1

// const person = {
//   name: ": Asim",
//   age: 15,
// };

// for (let property in person) console.log(property, person[property]);

// NO. 2

// const colors = ["red", "pink", "black"];
// for (let index in colors) console.log(index, colors[index]);

// ========================= //
// for-of loop :-
// used for arrays mostly to directly print each item on everyline

// ========================= //

// Break
// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   console.log(i);
//   i++;
// }

// continue
// let i = 0;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// ========================= //
// EXERCISE 1;-

// function max(a, b) {
//   return a > b ? a : b;
// }

// let number = max(3, 2);
// console.log(number);

// ========================= //
// EXERCISE 2;-

// function isLandscape(width, height) {
//   return width > height;
// }

// let screen = isLandscape(10, 5);
// console.log(screen);

// ========================= //
// EXERCISE 3;-
// const output = fizzBuzz(7);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "Not a Number";
//   // return NaN;

//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   if (input % 3 !== 0 && input % 5 !== 0)
//     return "number cant be divided by 3 and 5";

//   // return input;
// }

// ========================= //
// EXERCISE 4;-

// checkSpeed(129);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("OK");
//     return; //agr condition true hai to ok ke bad khallas agr nahi hai to if ke bad wala code run hoga
//   }

//   // formula banaya maine points ka ... or Math.floor se decimal value round off hoti hai
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);

//   if (points >= 12) console.log("license suspended");
//   else console.log("points", points);
// }

// ========================= //
// EXERCISE 5;-

// function showNumbers(limit) {
//   if (typeof no !== "number")
//     console.log("ullu, number to likh jahils, KAHAN SE ATE HAIN YE");
//   // yahi same kam hum ternary operator se bhi kr sakte hain
//   for (let no = 0; no <= limit; no++) {
//     if (no % 2 === 0) console.log(no, ":", "Even");
//     else console.log(no, ":", "odd");
//   }
// }

// showNumbers("a");

// ========================= //

// truthy and falsy

// truthy or falsy woh hote hain jin ki value boolean na hoti ho balke koi or ho and if() pr show krwayen to hojaye

// const word = true; //its not truthy its boolean
// if (word) console.log("ok");

// const letter = "a"; //its truthy cuz its not the boolean
// if (letter) console.log("okay");

// falsy : undefined , '', null, NaN ,0
// agr in ko main if main likon ga to woh print nahi hogi

// EXERCISE 6;-
// let array = [0, "", 1, 3];
// function countTruthy(array) {
//   let i = 0;
//   for (let value of array) {
//     if (value) i++;
//   }
//   console.log(i);
// }
// countTruthy(array);

// ========================= //
// EXERCISE 7;-
// const movie = {
//   title: "a",
//   releasedYear: 2050,
//   rating: 4,
//   director: "b",
// };
// //
// showProperties(movie);
// //
// function showProperties(obj) {
//   for (let property in obj)
//     if (typeof obj[property] === "string") console.log(property, obj[property]);
// }

// ========================= //
// EXERCISE 8;-

//... 15 tk "3 ke multiples" : 3 6 9 12 15
//   .15 tk "3 ke multiples" : 5 10 15
//   .ye sare multiples add krne hain funtion ke mutabiq or phir
//  in dono main jo same ho us ko aik bar consider karen ge

// sum(10);
// //
// function sum(limit) {
//   let sum = 0;
//   //
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }
//   //
//   console.log(sum);
// }

// ========================= //
// EXERCISE 9;-

// grades
// 0-59 F , 60-69 D , 70-79 C , 80-89 B , 90-100 A

// const marks = [80, 80, 1000];
// calculateGrade(marks);

// function calculateGrade(marks) {
//   let sum = 0;
//   for (let mark of marks) {
//     sum += mark;
//   }
//   let average = sum / marks.length;

//   if (average < 60) console.log("F Grade");
//   else if (average < 70) console.log("D Grade");
//   else if (average < 80) console.log("C Grade");
//   else if (average <= 90) console.log("B Grade");
//   else console.log("A Grade");
// }

// ========================= //
// EXERCISE 10;-

// showStars(5);

// // rows are 'row'
// // stars are 'j'

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let j = 0; j < row; j++) pattern += "*";
//     console.log(pattern);
//   }
// }

// ========================= //
// EXERCISE LAST (11);-

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number) === true) console.log(number);
}

function isPrime(number) {
  let isPrime = true;
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) isPrime = false;
  }
  return isPrime;
}

// showPrimes(20);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }
