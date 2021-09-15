"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop }; //add all of your function names here that you need for the node mocha tests

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}
console.log(sumTo(10));



function factorial(n) {
    if (n === 0)
        return 1;
    if (n === 1)
        return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

function fib(n) {
    if (n <= 0)
        return n;
    if (n === 1)
        return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(10));


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    alert(list.value); // output the current item

    if (list.next) {
        printList(list.next); // do the same for the rest of the list
    }
}
printList(list);

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }

}

printList(list);




let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value);
}

printReverseList(list);

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}

printReverseList(list);

//=======================================
//part II
//Q1
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
}

function printNames(node1) {
    console.log(node1.name + ":" + node1.value);
    if (node1.children && node1.children.length > 0) {
        console.log("Inside IF ", node1.name);
        node1.children.forEach(function (child) {
            console.log(`Inside forEach parent ${node1.name}  child ${child.name}`)
            printNames(child);
        })
    }
}
printNames(node1)

// 2. Modify both versions to return an array containing the “name:value” strings for the entries rather
// than printing the values to the console.
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

function printNamesAndValues(node1) {
    console.log(node1.name + ":" + node1.value);
    if (node1.children && node1.children.length > 0) {
        console.log("Inside IF ", node1.name + ":" + node1.value);
        node1.children.forEach(function (child) {
            console.log(`Inside forEach parent ${node1.name}  child ${child.name}+":"+ ${node1.value}  child ${child.value}`)
            printNamesAndValue(child);
        })
    }
}
printNamesAndValues(node1);
