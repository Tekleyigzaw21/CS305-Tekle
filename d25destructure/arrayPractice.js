"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum, includesEvenAge, findSumOfNums, findAvgOfNums, findAvgEvenAge }; //add all of your function names here that you need for the node mocha tests

const numArray = [5, 0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]
/*
 map :
 - double numbers
 - double age
filter:
 - filter all even numbers
 - filter all age > 10
 - find even, include even
 - find age > 10, include age > 10
 reduce
 - find sum of numbers
 - find average of numbers
 - find max of numbers
 - find max for ages
 - use a chain of map filter reduce to find the average age of people with even number ages
 - use a chain of map filter reduce to find the average age of people with odd number ages
*/
function doubleNums(arr) {
    return arr.map(num => num * 2);
}

function doubleAges(arr) {
    return (arr.map((item) => {
        item.age = item.age * 2;
        return item;
    }));
}

function filterEven(arr) {
    return (arr.filter((num) => (num % 2 === 0) ? num : null));
}

function filterOver10(arr) {
    return (arr.filter((item) => item.age > 10));
}

function findEvenNum(arr) {
    return (arr.find((num) => (num % 2 == 0) ? num : null));
}

function findEvenAge(arr) {
    return (arr.find((item) => (item.age % 2 === 0) ? item : null));
}

function includesEvenNum(arr) {
    let even = arr.find((num) => num % 2 === 0);
    return (arr.includes(even));
}

function includesEvenAge(arr) {
    let evenage = arr.find((item) => (item.age % 2 === 0));
    return (arr.includes(evenage));
}

function findSumOfNums(arr) {
    let tot = arr.reduce((sum, current) => sum + current.age, 0);
    return tot;
}

function findAvgOfNums(arr) {
    let tot = arr.reduce((sum, current) => sum + current.age, 0);
    return (tot / arr.length).toFixed(2)
}

function findMaxOfNums(arr) {
    return arr.reduce((max, current) => {
        if (!max.num) return current;
        if (max.num > current.num) return max;
        return current;
    }, {});
}

function findMaxOfAge(arr) {
    return arr.reduce((max, current) => {
        if (!max.age) return current;
        if (max.age > current.age) return max;
        return current;
    }, {});
}

function findAvgEvenAge(arr) {
    let sum = 0;
    return arr.filter(item => {
        if (item.age % 2 == 0) {
            sum = item.age.reduce((sum, current) => sum + current, 0)
        }
        return sum / arr.length;
    });
}