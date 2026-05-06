// Create array
const fruits = ["Apple", "Banana", "Mango"];

// Print first value
console.log(fruits[0]);

// Print second value
console.log(fruits[1]);

// Change Banana to Orange
fruits[1] = "Orange";

// Print updated array
console.log(fruits);

// Add value at end
fruits.push("Grapes");

// Print array after push
console.log(fruits);

// Remove last value
fruits.pop();

// Print array after pop
console.log(fruits);

// Add value at beginning
fruits.unshift("Kiwi");

// Print array after unshift
console.log(fruits);

// Remove first value
fruits.shift();

// Print array after shift
console.log(fruits);

// Print total number of items
console.log(fruits.length);

// Check if Apple exists
console.log(fruits.includes("Apple"));

// Check position of Mango
console.log(fruits.indexOf("Mango"));

// Convert array into string
console.log(fruits.join("-"));

// Copy values from index 0 to 2 (2 not included)
const slicedArray = fruits.slice(0, 2);

// Print copied array
console.log(slicedArray);

// Print original array
console.log(fruits);

// Create number array
const nums = [10, 20, 30, 40];

// Remove 2 items starting from index 1
nums.splice(1, 2);

// Print array after splice
console.log(nums);

// Loop through array
fruits.forEach(function(item){

    // Print each item
    console.log(item);

});

// Create first array
const arr1 = [1, 2];

// Create second array
const arr2 = [3, 4];

// Merge arrays using concat
const merged = arr1.concat(arr2);

// Print merged array
console.log(merged);

// Merge arrays using spread operator
const spreadMerged = [...arr1, ...arr2];

// Print spread merged array
console.log(spreadMerged);

// Create reverse array
const reverseArray = [1, 2, 3];

// Reverse array
reverseArray.reverse();

// Print reversed array
console.log(reverseArray);

// Create unsorted array
const numbers = [5, 2, 9, 1];

// Sort array
numbers.sort();

// Print sorted array
console.log(numbers);

// Check if fruits is array
console.log(Array.isArray(fruits));

// Convert string into array
console.log(Array.from("HELLO"));

// Create original array
const original = [1, 2];

// Copy reference
const copied = original;

// Add value into copied array
copied.push(3);

// Print original array
console.log(original);

// Print copied array
console.log(copied);