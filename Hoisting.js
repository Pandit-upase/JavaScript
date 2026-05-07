
// ===============================
// FUNCTION DECLARATION
// ===============================

// Call before declaration
greet();

// Function declaration
function greet(){

    // Print message
    console.log("Hello from function declaration");

}

// Output:
// Hello from function declaration




// ===============================
// FUNCTION EXPRESSION WITH var
// ===============================

// ERROR if called before assignment
// sayHi();

// Store function in var
var sayHi = function(){

    // Print message
    console.log("Hello from var function");

};

// Call function
sayHi();

// Output:
// Hello from var function




// ===============================
// FUNCTION EXPRESSION WITH let
// ===============================

// ERROR if called before declaration
// sayHello();

// Store function in let
let sayHello = function(){

    // Print message
    console.log("Hello from let function");

};

// Call function
sayHello();

// Output:
// Hello from let function




// ===============================
// var HOISTING
// ===============================

// Print before declaration
console.log(score);

// Declare variable
var score = 100;

// Print after assignment
console.log(score);

// Output:
// undefined
// 100




// ===============================
// let HOISTING
// ===============================

// ERROR before declaration
// console.log(age);

// Declare variable
let age = 20;

// Print value
console.log(age);

// Output:
// 20