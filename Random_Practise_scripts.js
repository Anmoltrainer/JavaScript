//String Manipulation:

let greeting = "Hello";
let name = "Alice";
console.log(greeting + ", " + name + "!");

//Math Operations:

let num1 = 10;
let num2 = 5;
console.log("Sum: " + (num1 + num2) + ", Product: " + (num1 * num2));

//Date and Time:

let currentDate = new Date();
console.log("Current date: " + currentDate.toDateString());

//Async Programming (Promise):

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });
}

fetchData().then(result => console.log(result));

//Error Handling:

try {
    // Code that may throw an error
    throw new Error("This is an error");
} catch (error) {
    console.error("Caught an error: " + error.message);
}

//Local Storage:

localStorage.setItem("username", "John");
let storedUsername = localStorage.getItem("username");
console.log("Stored username: " + storedUsername);

//JSON Parsing:

let jsonString = '{"name": "Bob", "age": 28}';
let person = JSON.parse(jsonString);
console.log("Person: " + person.name + ", Age: " + person.age);

//Higher-Order Functions:

function square(num) {
    return num * num;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(square);
console.log("Squared numbers: " + squaredNumbers);

//Arrow Functions:

let multiply = (a, b) => a * b;
console.log("Product: " + multiply(3, 4));

//Prompts and Alerts:

let userInput = prompt("Enter your name:");
alert("Hello, " + userInput + "!");

//Random Number Generator:

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Random number between 1 and 10: " + randomNumber);

//Falsy Values:

let value1 = 0;
let value2 = "";
let value3 = null;
let value4 = undefined;

console.log("Falsy values: " + Boolean(value1) + ", " + Boolean(value2) + ", " + Boolean(value3) + ", " + Boolean(value4));

//Set Timeout:

console.log("Start");
setTimeout(() => console.log("Delayed log"), 2000);
console.log("End");

//Object Methods:

let car = {
    brand: "Toyota",
    model: "Camry",
    startEngine: function () {
        console.log("Engine started for " + this.brand + " " + this.model);
    }
};

car.startEngine();

//Closures:

function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

let closure = outerFunction();
closure();

//Regular Expressions:

let pattern = /\d{2}-\d{2}-\d{4}/;
let dateStr = "01-15-2023";

if (pattern.test(dateStr)) {
    console.log("Valid date format");
} else {
    console.log("Invalid date format");
}