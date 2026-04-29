// Demonstrating Data Type Conversion in JavaScript

// String to Number
let strToNum = "123";
let convertedNum = Number(strToNum);
console.log("String to Number:", convertedNum, "Type:", typeof convertedNum);

// Number to String
let numToStr = 456;
let convertedStr = String(numToStr);
console.log("Number to String:", convertedStr, "Type:", typeof convertedStr);

// Boolean to String
let boolToStr = true;
let convertedBoolStr = String(boolToStr);
console.log("Boolean to String:", convertedBoolStr, "Type:", typeof convertedBoolStr);

// String to Boolean
let strToBool = "true";
let convertedBool = (strToBool === "true");
console.log("String to Boolean:", convertedBool, "Type:", typeof convertedBool);

// Number to Boolean
let numToBool = 1;
let convertedNumBool = Boolean(numToBool);
console.log("Number to Boolean:", convertedNumBool, "Type:", typeof convertedNumBool);

// Boolean to Number
let boolToNum = false;
let convertedBoolNum = Number(boolToNum);
console.log("Boolean to Number:", convertedBoolNum, "Type:", typeof convertedBoolNum);