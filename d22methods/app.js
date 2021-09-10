"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns{​​​​​​​​Accumulator}​​​​​​​​ constructor function
 */

function Accumulator(currentValue, increament) {
    this.currentValue = currentValue;
    this.increament = increament;
    this.accumulate = function () {
        this.currentValue += increament;
    }
    //return currentValue;
    this.report = function () {
        this.currentValue;
    }
    return this.report;
}
let acc = new Accumulator(100, 5);
console.log(acc.accumulate());
console.log(acc.report());
/**
 * @returns{​​​​​​​​Calculator}​​​​​​​​ this is a constructor function
 */
function Calculator() {

    this.setValue = function (a, b) {
        this.a = a;
        this.b = b;
    },

        this.sum = function () {
            return (this.a + this.b);
        }
    this.mul = function () {
        return (this.a * this.b);
    }
    //implement this

}

let calc = new Calculator();
calc.setValue(20, 30);
console.log(calc.sum());//50
console.log(calc.mul());//600




