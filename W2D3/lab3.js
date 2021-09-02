//#Q1
"use strict";
/**
 * 
 * @param {string} alphabet to be check wheather it is vowel or not
 * @returns{Boolean} return true or false
 */
function isVowel(alphabet) {
    if (
        alphabet === "a" ||
        alphabet === "e" ||
        alphabet === "i" ||
        alphabet === "o" ||
        alphabet === "u" ||
        alphabet === "A" ||
        alphabet === "E" ||
        alphabet === "I" ||
        alphabet === "O" ||
        alphabet === "U"
    )
        return true;
    return false;
}
/* global assert isVowel*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */

const assert = require("assert");

describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});


//#Q2
"use strict";
function computeSalesCommission(salaried, sales) {
    let commission = 0;
    if (salaried == true) {
        if (sales >= 500) {
            commission = sales * 0.02;
        }
        else if (sales >= 300) {
            commission = sales * 0.01;
        }
    }
    else
        if (sales >= 500) {
            commission = (sales * 0.03);
        }
        else if (sales >= 300) {
            commission = (sales * 0.02);
        }
    return commission;
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));


console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});

//#Q3
"use strict";
function compoundInterest(p, r, t) {
    const n = 12;
    return p * ((1 + (r / 100) / n) ** (n * t));
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
