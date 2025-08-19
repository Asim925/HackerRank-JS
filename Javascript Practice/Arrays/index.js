// const number = [3, 4];

// // adding at the end
// number.push(5, 6);

// // adding at the start
// number.unshift(1, 2);

// // deleting,  adding , anywhere
// //is ke parameters se values dekh kr rakho
// number.splice(2, 0, "a", "b");

// console.log(number);

// ==============================================================

// const number = [1, 2, 3, 2, 4];

// // check the index of the element at the start
// console.log("index of 2 is : " + number.indexOf(2));

// // if 'a' is not element of array then result : -1
// // -1 ka mtlb 'not present'
// console.log("a is the elemnt of array or not : " + number.indexOf("a"));

// // check the index of the element at the last
// console.log("last index of 2 is : " + number.lastIndexOf(2));

// // checking if the element is present in the array or not
// console.log(number.indexOf(1) !== -1);
// //"aise bhi check kr sakte hai :-"
// console.log(number.includes(9));
// // kia 1 ka index -1 hai ya nahi
// // if present :true
// // if not present :false

// //agr search start kisi or index se krna hai to (jaise 3 se)
// console.log(number.indexOf(2, 3));

// ========================================================================================
// const details = [
//   { id: 1, name: "a" }, //element 1 (0 index)
//   { id: 2, name: "b" }, //element 2 (1 index)
// ];

// ===================================
// == Hard way == (finding primitive elements)

// const detail = details.find(function (details) {
//   return details.name === "a"; // true or not
// });
//
// console.log(detail);

// == Easy way == (finding primitive elements) => (by arrow)

// const detail = details.find((details) => details.name === "a");
// console.log(detail);

// ===================================

// const detailsIndex = details.findIndex(function (details) {
//   return details.name === "b"; // true or not
// });
//
// console.log(detailsIndex);

// ========================================================================================
// DELETING THE ELEMENTS

// const group = [1, 2, 3, 4];

// === from end

// let last = group.pop(); // push ka ulta
// console.log(group);
// console.log("deleted number is : " + last);
//
// === from start

// let first = group.shift(); // unshift ka ulta
// console.log(group);
// console.log("deleted number is : " + first);

// == from anywhere

// let anywhere = group.splice(2, 2); // 2nd index se start ho kr 2 or delete honge
// console.log(group);
// console.log(anywhere);

// ========================================================================================
//REMOVING ALL ELEMENTS OF THE ARRAY

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// solution 1
// numbers= []; // !important
// console.log(number);

// solution 2
// numbers.length = 0; // !important
// console.log(numbers);

// solution 3
// numbers.splice(0, numbers.length);
// console.log(numbers);

// solution 4
// while (numbers.length > 0) numbers.pop();
// console.log(numbers);

// ========================================================================================
// slicing or combining the array with HARD MEHTOD: PRIMITIVE TYPE

// const first = [1, 2, 3];
// const last = [4, 5, 6];

// let combined = first.concat(last); // combine first with last
// let sliced = combined.slice(3);
// // combined.slice(); se poora array wapis
// // combined.slice(3, 5); se 3rd element se 5th tak print hoga

// console.log("first array : " + first);<
// console.log("last array : " + last);
// console.log("====>");
// console.log("combined array : " + combined);
// console.log("====>");
// console.log("slicing the combined one : " + sliced);

// ========================================================================================
// slicing and combining the array using easy method : PRIMITIVE TYPE

// let first = [1, 2];
// let last = [3, 4];

// // let combined = first.concat(last);
// let combined = [...first, ...last];
// console.log(combined);

// // combined.slice();
// let copy = [...combined];
// console.log(copy);

// ========================================================================================
// looping array

// const numbers = ["a", "b", "c", "d"];

// // == WAY 1 ==>
// for (let number of numbers) {
//   console.log("Element : " + number);
//   console.log("Index : " + numbers.indexOf(number));
//   console.log("===");
// }

// // == WAY 2 ==>
// numbers.forEach((number, index) =>
//   console.log(
//     "element : " + number,
//     "||===>" + " " + "index of the element is : " + index
//   )
// );

// ========================================================================================
// Joining elements of the Array

// let array = [1, 2, 3, 4];
//
// let joined = array.join(" , ");
// console.log(joined);

// let message = "papa dabbu hain";
// let parts = message.split(" ");
// console.log(parts);

// let combined = parts.join("-");
// console.log(combined);

// ========================================================================================
// SORTING

// =====?>>

// const array = [2, 9, 8];
// console.log(array.sort());
// console.log(array.reverse());

// =====?>>

// const courses = [
//   { id: 1, name: "javascript" }, // a
//   { id: 2, name: "Node.js" }, // b
// ];

// courses.sort((a, b) => {
//   // convert the text into lower / Upper case in the memory
//   const nameA = a.name.toLowerCase;
//   const nameB = b.name.toLowerCase;

//   if (nameA > nameB) return 1; // 1 : first should be this
//   if (nameA < nameB) return -1; // -1 : last should be this
//   // if(nameA===nameB)
//   return 0;
// });

// console.log(courses);

// ========================================================================================
// Checking every element or some element

//======== =+ Every +=

// const numbers = [1, 2, 3];
//
// let positive = numbers.every((value) => {
//   return value >= 0;
// });
//
// if (positive) console.log(numbers);
//

//====== =+ Some +=

// const numbers = [1, -1, 2, 3];

// // let somePositive = numbers.some(function(value) {return value >= 0;}) :::--
// let somePositive = numbers.some((value) => value >= 0);

// if (somePositive) console.log(numbers);

// ========================================================================================
// +++=== FILTER

// const array = [1, -1, 2, -2];

// console.log(`this is the array  ${array}`);
// console.log("filtering negative out ");

// let filtered = array.filter((value) => value >= 0);

// console.log(`here it is :  ${filtered}`);

// ========================================================================================
// MAPPING ===>

// const numbers = [1, 2, 3];

// let items = numbers.map((value) => "<li>" + value + "<li/>");
// console.log("these are the items : " + items);

// let list = items.join("  ");
// console.log("by joining ; " + "<ul>" + list + "</ul>");

// Mapping objects  > ========= >>>

// const numbers = [1, -1, 2, 3];

// const items = numbers
//   .filter((value) => value >= 0)
//   .map((value) => ({ anything: value }))
//   .filter((obj) => obj.anything > 1)
//   .map((obj) => obj.anything);

// console.log(items);

// ========================================================================================
// REDUCING [all the values into 1 value {means add all of the values}]
// ===>

// let numbers = [-1, 2, 3, 1];

// let sum = 0;
// for (let number of numbers) sum += number;
// console.log(sum);

// ==== BY reducing ==>

// let numbers = [1, 7, 3, 4, -4];

// let addition = numbers.reduce((sum, value) => (sum += value));
// console.log(addition);
// // sum = 1st value , value = 2nd value ==> [sum = 1st + 2nd value](baqi sb bhi aise hi)
// // sum is the the parameter where the value is going to be stored
// // value is the parameter in which every value will be used of the array
