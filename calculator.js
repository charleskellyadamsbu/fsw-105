const readline = require('readline-sync');

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

function subTwoNumbers(num1, num2) {
    return num1 - num2;
}

function mulTwoNumbers(num1, num2) {
    return num1 * num2;
}

function divTwoNumbers(num1, num2) {
    return num1 / num2;
}

function calculate(num1, num2, operation) {
    switch(operation) {
        case "add":
            console.log("The result is: " + addTwoNumbers(num1, num2));
        break;

        case "sub":
            console.log("The result is: " + subTwoNumbers(num1, num2));
        break;

        case "mul":
            console.log("The result is: " + mulTwoNumbers(num1, num2));
        break;

        case "div":
            console.log("The result is: " + divTwoNumbers(num1, num2));
        break;
    }
}

var num1 = readline.questionInt("Please enter your first number: ");
var num2 = readline.questionInt("Please enter your second number: ");
var operation = readline.question("Please enter the operation to perform: add, sub, mul, div: ");
calculate(num1, num2, operation);