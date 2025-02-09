var deepArray = [["Hello"]]
var shallowCopy = deepArray.slice(0)

shallowCopy[0].push("World")
console.log(shallowCopy[0])
console.log(deepArray[0])
// console.log(shallowCopy[0]) === console.log(deepArray[0])

var deepCopy = JSON.parse(JSON.stringify(deepArray))
deepCopy[0].push("is great")
console.log(deepArray[0])
console.log(deepCopy[0])
// console.log(deepArray[0]) !== console.log(deepCopy[0])


// Hoisting (All declarations can be hoisted, but not all will produce the same results and some will contain errors and stop the code from executing)
hello();

function hello() {
    console.log("Hello, world!");
}

// Expression Functions aren't hoisted in the same way
greet(); 

const greet = function () {
    console.log("Hi there!");
};

// Var
console.log(a); ✅ Undefined
var a = 10;
console.log(a); // 10
// For JS the code is written as so
var a;
console.log(a); // Undefined
a = 10;
console.log(a); // 10

// When it comes to let and const, they are hoisted but they won't produce a result, rather an error stating that the variable couldn't be accessed
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// Question 1
// function triArea(base, height) {
// 	var area = 0;
// 	area = 0.5 * base * height
// 	return area
// }

// Question 2
// function addition(num) {
// 	var result = 0
// 	result = num + 1
// 	return result
// }

// Question 3
// function convert(minutes) {
// 	var seconds = 0;
// 	seconds = minutes * 60
// 	return seconds
// }

// Question 4
// function findPerimeter(length, width) {
// 	var perimeter = 0;
// 	perimeter = (length + width) * 2;
// 	return perimeter;
// }

// Question 5
// function points(twoPointers, threePointers) {
// 	var num1, num2;
// 	var result;
// 	num1 = twoPointers * 2;
// 	num2 = threePointers * 3;
// 	result = num1 + num2;
// 	return result;
// }
