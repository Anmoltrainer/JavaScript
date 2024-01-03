//Basic Arrow Function:


let greet = () => {
    console.log("Hello!");
};

greet();

//Arrow Function with Parameters:

let add = (a, b) => a + b;

let sum = add(3, 7);

//Arrow Function with Implicit Return:


let square = num => num * num;

let squaredValue = square(8);

//Arrow Function in Array Map:


let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);

//Arrow Function with Object Literal:


let createPerson = (name, age) => ({ name: name, age: age });

let person = createPerson("Alice", 30);

//Arrow Function with Rest Parameter:


let sumNumbers = (...numbers) => numbers.reduce((total, num) => total + num, 0);

let totalSum = sumNumbers(2, 4, 6, 8);

//Arrow Function with Default Parameters:

let greetUser = (name = "Guest") => console.log("Hello, " + name + "!");

greetUser();

//Arrow Function in Array Filter:


let values = [10, 15, 20, 25, 30];
let filteredValues = values.filter(value => value > 20);

//Arrow Function in setTimeout:


setTimeout(() => {
    console.log("Delayed log");
}, 2000);

//Arrow Function in Promise:


let fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });
};

fetchData().then(result => console.log(result));