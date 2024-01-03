//Try-Catch for Divide by Zero
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

console.log(divide(10, 2));  // Output: 5
console.log(divide(8, 0));   // Output: Error: Division by zero is not allowed


//Handling JSON Parsing Errors
let jsonString = '{"name": "Alice", "age": "twenty"}';

try {
    let person = JSON.parse(jsonString);
    console.log("Person: " + person.name + ", Age: " + person.age);
} catch (error) {
    console.error("Error parsing JSON: " + error.message);
}


//Custom Error Handling Function
function processUserData(userData) {
    try {
        if (!userData.name || !userData.age) {
            throw new Error("Incomplete user data");
        }
        console.log("Processing user data...");
    } catch (error) {
        handleCustomError(error);
    }
}

function handleCustomError(error) {
    console.error("Custom Error: " + error.message);
}

processUserData({ name: "Bob" });  // Output: Custom Error: Incomplete user data

//Async Function with Try-Catch
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log("Data: ", data);
    } catch (error) {
        console.error("Error fetching data: " + error.message);
    }
}

fetchData();

//Using Finally Block
function performTask() {
    try {
        // Code that may throw an error
        throw new Error("An error occurred");
    } catch (error) {
        console.error("Error: " + error.message);
    } finally {
        console.log("Finally block executed");
    }
}

performTask();  // Output: Error: An error occurred, Finally block executed

//Handling Multiple Errors
function processInput(input) {
    try {
        if (typeof input !== "number") {
            throw new TypeError("Input must be a number");
        }

        if (input < 0) {
            throw new RangeError("Input must be non-negative");
        }

        console.log("Input processed successfully");
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

processInput("abc");  // Output: Error: Input must be a number
processInput(-5);     // Output: Error: Input must be non-negative
