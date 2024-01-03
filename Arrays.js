//1

let colors = ["red", "green", "blue"];
console.log("Colors: " + colors.join(", "));

//2
let mixedArray = [42, "John", true, null];

//3
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//4
let colors = ["Red", "Green", "Blue"];
console.log("Number of colors: " + colors.length);
//5
let sports = ["Football", "Basketball"];
sports.push("Tennis");
//6
let numbers = [1, 2, 3, 4, 5];
numbers.pop();
//7
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let thirdDay = daysOfWeek[2];
//8
let temperatures = [22, 25, 20, 18, 23];
temperatures.forEach(temp => console.log("Temperature: " + temp));
//9
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
