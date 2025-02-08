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