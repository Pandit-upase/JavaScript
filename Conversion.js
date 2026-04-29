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

//============================================*****=====================================


// STRING + NUMBER → becomes STRING (joins like text)
console.log("1" + 2); 
// "1" + 2 → "12"


// NUMBER + STRING → becomes STRING
console.log(1 + "2"); 
// 1 + "2" → "12"


// Left to right execution happens
console.log("1" + 2 + 2);

// Step 1: "1" + 2 → "12" (string now)
// Step 2: "12" + 2 → "122"


// Again left to right
console.log(1 + 2 + "2");

// Step 1: 1 + 2 → 3 (number)
// Step 2: 3 + "2" → "32" (string conversion happens here)

