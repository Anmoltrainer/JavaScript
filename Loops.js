//For Loop:

for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

//For-In Loop (Iterating over Object Properties):

let person = {
    name: "Alice",
    age: 30,
    profession: "Engineer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

//For-Of Loop (Iterating over Arrays):

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log("Color: " + color);
}

//While Loop:

let counter = 0;

while (counter < 3) {
    console.log("Count: " + counter);
    counter++;
}

//Do-While Loop:

let num = 1;

do {
    console.log("Number: " + num);
    num++;
} while (num <= 3);
Looping through Strings:
let greeting = "Hello";

for (let char of greeting) {
    console.log("Character: " + char);
}

//Nested Loops:

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("Outer Loop: " + i + ", Inner Loop: " + j);
    }
}

//Breaking out of a Loop:

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Iteration: " + i);
}

//Skipping an Iteration:

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Iteration: " + i);
}

//Looping through Arrays with forEach:

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
    console.log("Number: " + num);
});