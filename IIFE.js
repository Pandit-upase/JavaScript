//RUNS CODE IMMEDIATELY
(function()
{
    console.log("Basic IIFW")
})();
//==========================================================================

// Normal function
function greet(){

    console.log("Hello");

}
// Must call manually
greet();
//==========================================================================

//PASSING VALUES IMMEDIATELY
(function(name){

    console.log(`Welcome ${name}`);

})("Pandit");
//================================================================

//ARROW FUNCTION
((city) => {

    console.log(`City is ${city}`);

})("Pune");
//==========================================================================

//AVOIDS VARIABLE NAME CONFLICT

// Global variable
let user = "Global User";
(function(){

    // Private variable inside IIFE
    let user = "Private User";

    console.log(user);

})();
// Global variable remains unchanged
console.log(user);
//==============================================================================


//Here in the below code we have two global variables with same name,due to use of IIFE,
// there is no ambiguity problem between variables with same name,its solves the global varibale declaration conflict.

(function(){

    var username = "Pandit";

    console.log(username);

})();

(function(){

    var username = "Rahul";

    console.log(username);

})();

//PRIVATE SCOPE OF VARIABLES 
(function(){

    var password = "12345";

    console.log(password);

})();