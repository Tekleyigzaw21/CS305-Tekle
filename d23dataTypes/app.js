"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate, camelize }; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
    console.log(str.slice(0, 1).toUpperCase() + str.slice(1));

}
ucFirst("tekletsadik")

function checkSpam(str) {
    let upperStr = str.toUpperCase();
    return upperStr.includes('VIAGRA') || upperStr.includes('XXX');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;

}


function camelize(str) {
    return str
        .split('-')
        .map(

            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}
console.log(camelize("tekletsadik-atnafu-yigzaw"));

// I did this b/c there a code for this in the test part.
function extractCurrencyValue(str) {
    return +str.slice(1);
}