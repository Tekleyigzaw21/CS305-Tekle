"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
/*
Define a function maxOfThree() that takes three numbers as arguments and returns the
largest of them.
*/
function maxOfThree(a, b, c) {
    if (a >= b && a >= c)
        return a;
    else if (b >= a && b >= c)
        return b;
    else
        return c;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
/*
Define a function sum() and a function multiply() that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
multiply([1,2,3,4]) should return 24.
*/
function sum(arr) {
    let tot = 0;
    for (let i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (let i = 0; i < arr.length; i++) {
        tot *= arr[i];
    }
    return tot;

}
console.log(multiply(tot));
/*
Write a function findLongestWord() that takes an array of words and returns the length of
the longest one
*/
/**
 * 
 * @param {Array} wArr array of string strings
 * @returns{number} the length of the longest word
 */
function findLongestWord(wArr) {
    let maxLength = 0;
    for (let i = 0; i < wArr.length; i++) {
        if (wArr[i].length > maxLength)
            maxLength = wArr[i].length;
    }
    return maxLength;
}
console.log(findLongestWord(["add", "ewar", "wrtggo"]));
//==========================================

/**
 * 
 * @param {Array} givenArray 
 * @returns{Array} the reverse of the given array.
 */
function reverseArray(givenArray) {

    let reversedArray = [];
    for (let i = givenArray.length - 1; i >= 0; i--) {
        reversedArray.push(givenArray[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(givenArray) {
    for (let i = 0; i <= Math.floor((givenArray.length - 1) / 2); i++) {
        let fValue = givenArray[i];
        givenArray[i] = givenArray[givenArray.length - 1 - i];
        givenArray[givenArray.length - 1 - i] = fValue;
    }
    return givenArray;//The given array is reversed.
}

console.log(reverseArray([4, 6, 9]));
let givenArray = ["a", "b", "c"];
reverseArrayInPlace(givenArray);
console.log(givenArray)
//==========================================

/**
 * 
 * @param {Array} studentAnswers for each student. 
 * @param {Array} correctAnswers to check wheather the studnts answer is correct or not.
 * @returns {Array} the score of each student.
 */
function scoreExams(studentAnswers, correctAnswers) {
    let score = [];
    for (let eachAnswer of studentAnswers) {
        let count = 0;
        for (let i = 0; i < eachAnswer.length; i++) {
            if (eachAnswer[i] === correctAnswers[i])
                count++;
        }
        score.push(count);
    }
    return score;
}
