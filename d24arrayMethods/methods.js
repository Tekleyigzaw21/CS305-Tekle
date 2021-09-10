"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
let arr = [1, 16, 8, 21];
let filtered = filterRange(arr, 1, 20);
console.log(filtered); // 1,16,8 (matching values)
console.log(arr); // 1, 16, 8, 21 (not modified)

function filterRangeInPlace(arr2, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr2[i];
        if (value < a || value > b) {
            arr2.splice(i, 1);
            i--;
        }
    }

}
let arr2 = [1, 16, 8, 21];
let filtered1 = filterRangeInPlace(arr2, 1, 20);
console.log(arr2); // [3, 1]



function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };
    this.addMethod = function (name, fun) {
        this.methods[name] = fun;
    };
}

function unique(arr1) {
    let result = [];

    for (let str1 of arr1) {
        if (!result.includes(str1)) {
            result.push(str1);
        }
    }
    return result;
}


function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
console.log(groupById(users));