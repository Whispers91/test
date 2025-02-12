// Question 1
// var num = +prompt("Enter array length")
// var input
// var result = 0
// function sum(num) {
//     for (let i = 0 ; i < num ; i++) {
//         input = +prompt("Enter numbers")
//         result += input
//     }
//     console.log(result)
//     return result
// }

// sum(num)

// Question 2
// var num = +prompt("enter limit")
// var input = num
// var words = []
// var wordInput
// function upperCaseWords(num) {
//     for (let i = 0 ; i < input ; i++) {
//     wordInput = prompt("Enter Words")
//     words[i] = wordInput.toUpperCase()
//     }
//     console.log(words)
//     return words
// }

// upperCaseWords(num)

// Question 3
// var num = +prompt("enter limit")
// var numbers = []
// var max = 0
// var input
// function maxNum(num) {
//     for (let i = 0 ; i < num ; i++) {
//     input = +prompt("Enter Numbers")
//     numbers[i] = input
//     numbers.sort()
// }
//     max = numbers[0]
//     console.log(max)
//     return max
// }

// maxNum(num)

// Question 4
// var num = +prompt("enter limit")
// var numbers = []
// var min = 0
// var input
// function minNum(num) {
//     for (let i = 0 ; i < num ; i++) {
//     input = +prompt("Enter Numbers")
//     numbers[i] = input
//     numbers.sort()
//     numbers.reverse()
// }
//     min = numbers[0]
//     console.log(min)
//     return min
// }

// minNum(num)

// Question 5
// var num = +prompt("enter limit")
// var numbers = []
// var avg = 0
// var input
// function average(num) {
//     for (let i = 0 ; i < num ; i++) {
//     input = +prompt("Enter Numbers")
//     numbers[i] = input
//     avg = numbers[i] / num
// }
//     console.log(avg)
//     return avg
// }

// average(num)

// Question 6
// var num = +prompt("enter limit")
// var numbers = []
// var sum = 0
// var input
// function Even(num) {
//     for (let i = 0 ; i < num ; i++) {
//     input = +prompt("Enter Numbers")
//     numbers[i] = input
//     if (numbers[i] % 2 == 0) {
//         sum += numbers[i]
//     }
// }
//     console.log(sum)
//     return sum
// }

// Even(num)

// Question 7 
// var num = +prompt("enter limit")
// var numbers = []
// var input
// var secondMax = 0
// function secondMaxNum(num) {
//     for (let i = 0 ; i < num ; i++) {
//     input = +prompt("Enter Numbers")
//     numbers[i] = input
//     numbers.sort()
// }
//     secondMax = numbers[1]
//     return secondMaxNum
// }

// secondMaxNum(num)

// Question 8
// var num = +prompt("enter limit")
// var numbers = []
// var input
// var oddContainer = []
// var evenContainer = []
// var totalContainer = []
// function sort_Odd(num) {
//     for (let i = 0 ; i < num ; i++) {
//         input = +prompt("Enter Numbers")
//         numbers[i] = input
//         if (numbers[i] % 2 != 0) {
//             oddContainer[i] = numbers[i]
//         }
//         else if (numbers[i] % 2 == 0) {
//             evenContainer[i] = numbers[i]
//         }
//     }
//         totalContainer = [...oddContainer, ...evenContainer]
//     console.log(totalContainer)
//     return totalContainer
// }

// sort_Odd(num)