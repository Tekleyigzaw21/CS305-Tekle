"use strict";
module.exports = { isVowel, computeSalesCommission, compoundInterest, calcDownpayment, convertFahrenheit, calcDistance };
/**
 * 
 * @param {string} alphabet to be check wheather it is vowel or not
 * @returns{Boolean} return true or false
 */
//#Q1
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
//===========================

//#Q2
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
//=================================

/*#Q3
P(1 + r / n) ^ nt, where initialAamount = p, annualInterestRate = r, numberOfYearsToCompound = t.
*/
function compoundInterest(p, r, t) {
    const n = 12;
    return p * ((1 + (r / 100) / n) ** (n * t));
}
//===================================


//#Q4
function calcDownpayment(cost) {
    if (cost < 50000) {
        return 0.05 * cost;
    } else if (cost < 100000) {
        return 2500 + 0.1 * (cost - 50000);
    } else if (cost <= 200000) {
        return 7500 + 0.15 * (cost - 100000);
    } else {
        return 5000 + 0.1 * (cost - 200000);
    }

}
//====================
function convertFahrenheit(f) {
    let c = (f - 32) * (5 / 9);
    return c;
}
//====================
function calcDistance(x1, y1, x2, y2) {
    return (Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
}


for (let i = 1; i <= 12; i++) {
    let row = " ";
    for (let j = 1; j <= 12; j++) {
        row += i * j + "\t";
    }
    console.log(row);
}

// function sum(num1 = 8, num2 = 10) {
//     return num1 + num2;
// }
// console.log(sum(num1, num2));

let matrix = [
    [1, 2, 3, 10],
    [4, 5, 6, 20],
    [7, 8, 9, 30],
    [12, 14, 16, 40]];
console.log(matrix.length);
for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = 0; j < parseInt(matrix[i].length) / (i); j++) {
        console.log(matrix[i][j] + ("\t"));
    }
}
const age = 23;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);