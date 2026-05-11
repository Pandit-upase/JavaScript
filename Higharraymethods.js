// Array
let fruits = ["Apple", "Banana", "Mango"];

//   forEach loop
fruits.forEach(function(fruit){

    // Print each item
    console.log(fruit);

});

//ARROW FUNCTION VERSION
fruits.forEach((fruit) => {

    console.log(fruit);

});
//=========================================================================

//  (map)--> Returns new transformed array
let numbers = [1, 2, 3];

let doubled = numbers.map(function(num){

    // Return doubled value
    return num * 2;

});
console.log(doubled);
// ================================================================

 
// find()--> find first matching item
let values = [5, 10, 15, 20];

let result = values.find(function(value){

    // Find first value above 10
    return value > 10;

});
console.log(result);
//=========================================================================

// some()--> Checks if any item matches and returns result in true or false

let nums = [1, 2, 3];

let checkSome = nums.some(function(num){

    // Check if any number above 2
    return num > 2;

});
console.log(checkSome);
//============================================================================

// every()--> Checks if every items matches,returns result in true or false

let evenNumbers = [2, 4, 6];

let checkEvery = evenNumbers.every(function(num){

    // Check if all numbers are even
    return num % 2 === 0;

});
console.log(checkEvery);
//=========================================================================

//    reduce()--> Used to combine array into one value

let prices = [100,200,300];

let total = prices.reduce(function(x, y){

    // Add values
    return x + y;

},0);
console.log(total);
//=======================================================================

// filetr--> used to keep matching items,returns new array

let marks=[30,40,50,60,80,90,10]

let passed=marks.filter(function(mark)
{
    return mark >60;
});

console.log(passed);
