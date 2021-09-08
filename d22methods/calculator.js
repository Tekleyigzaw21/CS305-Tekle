const calculator = {};  // implement this

calculator.setValues = function (a, b) {
    this.a = a;
    this.b = b;
}

calculator.sum = function () {

    return (this.a + this.b);
}

calculator.mul = function () {

    return (this.a * this.b);
}


console.log("+++++++++++", calculator.setValues(2, 3));
console.log(calculator.sum());
console.log(calculator.mul());

