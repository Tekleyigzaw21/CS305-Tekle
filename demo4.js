// //CS305Assignment2QuestionsSolution 

// //Q1
// function computeSalesCommission(salaried, sales) {
//     let commission = 0;
//     if (salaried == true) {
//         if (sales >= 500) {
//             commission = sales * 0.02;
//         }
//         else if (sales >= 300) {
//             commission = sales * 0.01;
//         }
//     }
//     else
//         if (sales >= 500) {
//             commission = (sales * 0.03);
//         }
//         else if (sales >= 300) {
//             commission = (sales * 0.02);
//         }
//     return commission;
// }
// console.log("expect 0: ", computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));

// //===================================



// //Q2
// //P(1 + r / n) ^ nt, where initialAamount = p, annualInterestRate = r, numberOfYearsToCompound = t.
// function compoundInterest(p, r, t) {
//     const n = 12;
//     return p * ((1 + (r / 100) / n) ** (n * t));
// }
// console.log("expect 110.47", compoundInterest(100, 10, 1));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10));

// //=====================================



// //Q3
// function calcDownpayment(cost) {
//     if (cost < 50000) {
//         return 0.05 * cost;
//     } else if (cost < 100000) {
//         return 2500 + 0.1 * (cost - 50000);
//     } else if (cost <= 200000) {
//         return 7500 + 0.15 * (cost - 100000);
//     } else {
//         return 5000 + 0.1 * (cost - 200000);
//     }

// }
// console.log("expect 2000: ", calcDownpayment(40000));
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
// console.log("expect 22500: ", calcDownpayment(200000));

// //===============================


// //Q4
// function sumDigits(num) {
//     let sum = 0;
//     while (num != 0) {//1234;
//         sum += num % 10;//1234%10=4//123%10=3//12%10=2%//1%10=1// 0+4+3+2+1=10
//         num = num / 10;//1234/10=123//123/10=12//12/10=1 
//     }
//     return parseInt(sum);
// }
// console.log(sumDigits(1234));//10
// console.log(sumDigits(102));//3
// console.log(sumDigits(8));//8

// function multDigits(num) {
//     let product = 1;
//     let temp = num;
//     while (temp != 0) {//1234
//         product = product * (temp % 10);//1234%10=4//123%10=3//12%10=2%//1%10=1// 1*4*3*2*1=24
//         temp = Math.floor(temp / 10);//1234/10=123//123/10=12//12/10=1 
//     }
//     return parseInt(product);
// }
// console.log(multDigits(1234));//24
// console.log(multDigits(102));//0
// console.log(multDigits(8));//8
// //==================================


// //#5
// function convertFahrenheit(f) {
//     let c = (f - 32) * (5 / 9);
//     return c;
// }
// console.log("expect 0: ", convertFahrenheit(32));
// console.log("expect -17.7778: ", convertFahrenheit(0));
// console.log("expect 100: ", convertFahrenheit(212));
// console.log("expect 37.7778: ", convertFahrenheit(100));
// //=================================


// //Q6  d = √(x 2 − x 1 ) 2 + (y 2 − y 1 ) 2, where d is the distance between points (x1,y1) and (x2,y2).

// function calcDistance(x1, y1, x2, y2) {
//     return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
// }
// console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));

//=============================

// let user = {};
// user = { name: "Tekletsadik", age: 33, weight: 60, "Is Nice": true };
// console.log(user);

// user.isAdmin = true;
// console.log(user);
// user.id = 1222;
// console.log(user);
// delete user.weight;
// console.log(user);
// user.weight = 65;
// console.log(user["Is Nice"]);
// console.log(user["name"]);


// let fruit = "Apple"; prompt("Which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5, // the name of the property is taken from the variable fruit
//};
// console.log(bag.apple); // 5 if fruit="apple“
// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5 // bag.appleComputers = 5
// }
// console.log(bag.appleComputers);

function makeUser(name, age) {
    return {
        name: name,
        age: age
        // ...other properties
    };
}
let user = makeUser("John", 30);
console.log(user.name); // John

function makeUser(name, age) {
    return {
        name, // same as name: name
        age // same as age: age
        // ...
    };
}
let user1 = makeUser("John", 30);
console.log(user.age); // John

let user2 = { name: "John", age: 30 };
console.log("age" in user2); // true, user.age exists
console.log("blabla" in user2); // false, user.blabla doesn't exist
console.log("John" in user2); // false, John is not a key user2 


//The “for…in” loop
let user3 = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let key in user3) {
    // keys
    console.log(key); // name, age, isAdmin
    // values for the key
    console.log(user3[key]); // John, 30, true
}
let pt1 = { x: 1, y: 2 };
let pt2 = { x: 1, y: 2 }; // two independent objects
console.log(pt1 == pt2); // ??
console.log(pt1 === pt2) // ??

const user4 = {
    name: "John"
};
user4.age = 25; // (*)
console.log(user4.age); // 25
user4.name = "Fred";
console.log(user4.name); //’Fred’
//➢But, cannot be reassigned
const user5 = {
    name: "John"
};
//Error (can't reassign user)
// user5 = {
//     name: "Pete"
//}
console.log("+++++++++++++++++++++++++++++++++++++++++++");

let user6 = {
    name: "John",
    age: 30,
    sayHi: function () {
        // "this" is the "current object"
        console.log(this.name);
    }
}
let Admin = user6;
//user6.sayHi();
Admin.sayHi();

let user7 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user7.sayHi(); // Ilya

// function makeUser() {
//     return this; // this time there's no object literal
// }

// console.log(makeUser().name);

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user8 = makeUser();

console.log(user8.ref.name); // Error: Cannot read property 'name' of undefined



