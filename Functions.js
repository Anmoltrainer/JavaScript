// 1

function greet() {
    console.log("Hello!");
}

greet();

// 2

function add(a, b) {
    return a + b;
}

let sum = add(3, 7);

// 3

let multiply = function(x, y) {
    return x * y;
};

let result = multiply(4, 5);

// 4

let square = (num) => num * num;

let squaredValue = square(8);

// 5

function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetUser();

// 6

function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let totalSum = sumNumbers(2, 4, 6, 8);

// 7

function doSomethingAsync(callback) {
    setTimeout(() => {
        console.log("Task completed!");
        callback();
    }, 2000);
}

doSomethingAsync(() => console.log("Callback executed."));

// 8

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let resultFactorial = factorial(5);

// 9

function operateNumbers(x, y, operation) {
    return operation(x, y);
}

let additionResult = operateNumbers(3, 7, (a, b) => a + b);

// 10

(function() {
    let message = "IIFE Example";
    console.log(message);
})();



