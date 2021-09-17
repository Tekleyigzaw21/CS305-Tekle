"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary, getDateAgo };//add all your function names here you need for the node mocha tests


function topSalary(salaries) {
    let maxSalary = -Infinity;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}


function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}