
// ======================================================
// NORMAL FUNCTION DECLARATION
// ======================================================

// Create normal function
function greet(){

    // Print message
    console.log("Hello from normal function");

}

// Call function
greet();



// ======================================================
// FUNCTION WITH PARAMETERS
// ======================================================

// Parameters receive values
function greetUser(name){

    // Print name
    console.log("Hello " + name);

}

// Pass argument into function
greetUser("Pandit");



// ======================================================
// FUNCTION WITH MULTIPLE PARAMETERS
// ======================================================

// Function takes two numbers
function add(a, b){

    // Print addition
    console.log(a + b);

}

// Pass values
add(10, 20);



// ======================================================
// FUNCTION WITH RETURN
// ======================================================

// Return sends value back
function multiply(a, b){

    return a * b;

}

// Store returned value
const result = multiply(5, 2);

// Print result
console.log(result);



// ======================================================
// DEFAULT PARAMETERS
// ======================================================

// Default value used if no argument passed
function welcome(name = "Guest"){

    console.log("Welcome " + name);

}

// No value passed
welcome();



// ======================================================
// FUNCTION EXPRESSION
// ======================================================

// Function stored inside variable
const sayHi = function(){

    console.log("Hi from function expression");

};

// Call function
sayHi();



// ======================================================
// ARROW FUNCTION
// ======================================================

// Modern function syntax
const subtract = (a, b) => {

    return a - b;

};

// Print returned value
console.log(subtract(20, 5));



// ======================================================
// SHORT ARROW FUNCTION
// ======================================================

// Single line return
const square = num => num * num;

// Print square value
console.log(square(5));



// ======================================================
// ARROW FUNCTION RETURNING OBJECT
// ======================================================

// Return object from arrow function
const createUser = () => ({

    name: "Pandit",
    age: 20

});

// Print returned object
console.log(createUser());



// ======================================================
// CALLBACK FUNCTION
// ======================================================

// Function to print message
function message(name){

    console.log("Hello " + name);

}

// Another function receives callback
function processUser(callback){

    // Execute callback
    callback("Pandit");

}

// Pass function as argument
processUser(message);



// ======================================================
// HIGHER ORDER FUNCTION
// ======================================================

// Function returning another function
function multiplyBy(num){

    // Return inner function
    return function(value){

        return value * num;

    };

}

// Create double function
const double = multiplyBy(2);

// Print result
console.log(double(5));



// ======================================================
// REST PARAMETERS
// ======================================================

// Collect multiple values into array
function sum(...numbers){

    // Print all numbers
    console.log(numbers);

}

// Pass multiple arguments
sum(1, 2, 3, 4);



// ======================================================
// IIFE (IMMEDIATELY INVOKED FUNCTION)
// ======================================================

// Function runs immediately
(function(){

    console.log("IIFE executed immediately");

})();



// ======================================================
// OBJECT METHOD FUNCTION
// ======================================================

// Object with function
const user = {

    name: "Pandit",

    greet: function(){

        // this refers to current object
        console.log(this.name);

    }

};

// Call object method
user.greet();



// ======================================================
// FOREACH CALLBACK FUNCTION
// ======================================================

// Create array
const fruits = ["Apple", "Mango", "Banana"];

// Loop through array
fruits.forEach(function(item){

    // Print each item
    console.log(item);

});



// ======================================================
// MAP WITH SHORT ARROW FUNCTION
// ======================================================

// Create number array
const nums = [1, 2, 3];

// Double each value
const doubled = nums.map(num => num * 2);

// Print new array
console.log(doubled);



// ======================================================
// FUNCTION SCOPE
// ======================================================

// Create function
function testScope(){

    // Variable exists only inside function
    const message = "Inside function";

    // Print variable
    console.log(message);

}

// Call function
testScope();

// console.log(message);
// ERROR because variable is private to function