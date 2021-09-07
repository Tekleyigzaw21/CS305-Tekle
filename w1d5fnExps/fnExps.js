//"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = { double, times100, myMap, triple, myMap1, myMap2 }; //add all of your function names here that you need for the node mocha tests

//#Q1
function double(num) {
    return 2 * num;
}
console.log(double(25));

//#Q2
function times100(number) {
    return 100 * number;
}
console.log(times100(8));

//#Q3
function myMap(fun, arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fun(arr[i]);
    }
    return newArr;
}
let arr = [1, 3, 5, 7];
console.log(myMap(double, arr))
console.log(myMap(times100, arr))

console.log("============================");
//Q4
function triple(num) {
    return (3 * num);
}
// function myMap(array, func) {
//     for (let i = 0; i < arr.length; i++) {
//         function() { func(array[i]) };
//     }
// }

let myMap1 = function (array, fn) {
    let newAr = [];
    for (let i = 0; i < arr.length; i++) {
        newAr[i] = fn(array[i]);
    }
    return newAr;
}
let array = [1, 3, 5, 7];
console.log(myMap1(array, triple));


let myMap2 = (array2, func) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = func(array2[i]);
    }
    return newArray;
}
let array2 = [1, 3, 5, 7];
console.log(myMap2(array2, triple));








