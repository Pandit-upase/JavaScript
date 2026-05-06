// ======================================================
// 10. DESTRUCTURING
// ======================================================

// Destructuring means:
// Taking values out of object easily

const user = {

    name: "Pandit",
    age: 20

};

// Extract values from object
const { name, age } = user;

// Print extracted values
console.log(name);
console.log(age);

// Output:
// Pandit
// 20



// ======================================================
// 11. SPREAD OPERATOR (...)
// ======================================================

// Spread operator copies object properties

const originalUser = {

    name: "Pandit",
    age: 20

};

// Copy object
const copiedUser = {

    ...originalUser

};

// Change copied object
copiedUser.name = "Rahul";

// Print original object
console.log(originalUser);

// Print copied object
console.log(copiedUser);

// Output:
// { name: 'Pandit', age: 20 }
// { name: 'Rahul', age: 20 }



// ======================================================
// 12. OPTIONAL CHAINING (?.)
// ======================================================

// Optional chaining safely checks properties
// Prevents app crashes

const student = {

    name: "Pandit"

};

// Safely access nested property
console.log(student.address?.city);

// Output:
// undefined



// ======================================================
// 13. OBJECT.FREEZE()
// ======================================================

// Freeze locks object
// Cannot add/update/delete properties

const frozenUser = {

    name: "Pandit"

};

// Lock object
Object.freeze(frozenUser);

// Try changing value
frozenUser.name = "Rahul";

// Print object
console.log(frozenUser);

// Output:
// { name: 'Pandit' }



// ======================================================
// 14. JSON
// ======================================================

// JSON = JavaScript Object Notation
// Used for API data transfer

const apiUser = {

    name: "Pandit",
    age: 20

};

// Convert object into JSON string
const jsonData = JSON.stringify(apiUser);

// Print JSON string
console.log(jsonData);

// Output:
// {"name":"Pandit","age":20}


// Convert JSON string back into object
const parsedObject = JSON.parse(jsonData);

// Print object
console.log(parsedObject);

// Output:
// { name: 'Pandit', age: 20 }



// ======================================================
// 15. ARRAY OF OBJECTS
// ======================================================

// Real-world apps mostly use array of objects

const users = [

    { name: "Pandit", age: 20 },

    { name: "Rahul", age: 22 }

];

// Print first object
console.log(users[0]);

// Print first user's name
console.log(users[0].name);

// Output:
// { name: 'Pandit', age: 20 }
// Pandit



// ======================================================
// 16. IMPORTANT OBJECT METHODS
// ======================================================

const employee = {

    name: "Pandit",
    salary: 50000

};

// Get all keys
console.log(Object.keys(employee));

// Output:
// [ 'name', 'salary' ]


// Get all values
console.log(Object.values(employee));

// Output:
// [ 'Pandit', 50000 ]


// Get key-value pairs
console.log(Object.entries(employee));

// Output:
// [
//   [ 'name', 'Pandit' ],
//   [ 'salary', 50000 ]
// ]



// ======================================================
// 17. SHALLOW COPY VS DEEP COPY
// ======================================================

// Spread operator creates shallow copy
// Nested objects still share memory

const person = {

    name: "Pandit",

    address: {

        city: "Pune"

    }

};

// Copy object
const copiedPerson = {

    ...person

};

// Change nested object
copiedPerson.address.city = "Mumbai";

// Print original object city
console.log(person.address.city);

// Output:
// Mumbai

// WHY?
// Nested object still points to SAME memory



// ======================================================
// 18. STACK VS HEAP MEMORY
// ======================================================

// Primitive values create separate copies

let a = 10;

let b = a;

// Change b
b = 20;

// Print a
console.log(a);

// Output:
// 10


// Objects share reference memory

const obj1 = {

    name: "Pandit"

};

const obj2 = obj1;

// Change obj2
obj2.name = "Rahul";

// Print obj1
console.log(obj1.name);

// Output:
// Rahul

// WHY?
// Both point to SAME object in memory



// ======================================================
// 19. CONSTRUCTOR FUNCTION
// ======================================================

// Constructor function creates many objects

function User(userName, userAge){

    this.name = userName;

    this.age = userAge;

}

// Create objects
const user1 = new User("Pandit", 20);

const user2 = new User("Rahul", 22);

// Print objects
console.log(user1);

console.log(user2);

// Output:
// User { name: 'Pandit', age: 20 }
// User { name: 'Rahul', age: 22 }



// ======================================================
// 20. PROTOTYPE
// ======================================================

// Prototype shares methods between objects
// Saves memory

function Student(studentName){

    this.name = studentName;

}

// Add shared method
Student.prototype.greet = function(){

    console.log("Hello " + this.name);

};

// Create object
const student1 = new Student("Pandit");

// Call method
student1.greet();

// Output:
// Hello Pandit