//Test assertion for assignment W2D3
const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const compoundInterest = methods.compoundInterest;
const calcDownpayment = methods.calcDownpayment;
const convertFahrenheit = methods.convertFahrenheit;
const calcDistance = methods.calcDistance;

//#Q1
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
        assert.strictEqual(computeSalesCommission(true, 3500), 70);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 105);
    });
});

//#Q3
/**
 * //P(1 + r / n) ^ nt, where initialAamount = p, annualInterestRate = r, numberOfYearsToCompound = t.
 * 
 */
describe("compoundInterest", function () {
    it("compoundInterest", function () {
        assert.equal(compoundInterest(100, 10, 1), 110.47130674412968)
    });
    it("compoundInterest", function () {
        assert.equal(compoundInterest(10000, 5, 10), 16470.0949769028)
    });
});

//#Q4
describe("calcDownpayment", function () {
    it("calcDownpayment", function () {
        assert.equal(calcDownpayment(40000), 2000)
    });
    it("calcDownpayment", function () {
        assert.equal(calcDownpayment(50000), 2500)
    });
    it("calcDownpayment", function () {
        assert.equal(calcDownpayment(100000), 7500)
    });
    it("calcDownpayment", function () {
        assert.equal(calcDownpayment(200000), 22500)
    });
});

describe("convertFahrenheit", function () {
    it("convertFahrenheit", function () {
        assert.equal(convertFahrenheit(32), 0)
    });
    it("convertFahrenheit", function () {
        assert.equal(convertFahrenheit(0), -17.77777777777778)
    });
    it("convertFahrenheit", function () {
        assert.equal(convertFahrenheit(212), 100)
        it("convertFahrenheit", function () {
            assert.equal(convertFahrenheit(100), 37.7778)
        });
    });
});

describe("calcDistance", function () {

    it("calcDistance", function () {
        assert.equal(calcDistance(0, 0, 5, 5), 7.0710678118654755)
    });
});

