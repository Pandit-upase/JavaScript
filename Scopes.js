//Variable created outside block or function
//Accessible from anywhere

// Global variable
const userName = "Pandit1";

function greet1(){

    // Access global variable
    console.log(userName);
}
greet1();
// Access globally
console.log(userName);
//========================================================================



//LOCAL SCOPE-->Variable created INSIDE function/block.

function greet2(){

    //local variable
    const userName2 = "Pandit2";
    console.log(userName2);

}
greet2();
//error
//console.log(userName2);

//====================================================================

//FUNCTION SCOPE
//Variables Declared with var are function scoped 

function demo(){

    var age = 20;
   var name ="sonu"
    
    console.log(name);
    console.log(age);

}
//ERROR
//console.log(name);
demo();
//===========================================================

//BLOCK SCOPE 
//Variables declared with var and const in if,if else,and loop blocks.

if(false){

    let city = "Pune";

    console.log(city);
}
else{
    let city2="Mumbai"
    console.log(city2);
}
//=================================================================================


///SCOPE CHAIN
//Inner function can access:own variables,parent variables,global variables

const globalVar = "Global";

function outer(){

    const outerVar = "Outer";

    function inner(){

        const innerVar = "Inner";

        console.log(globalVar);

        console.log(outerVar);

        console.log(innerVar);

    }

    inner();

}

outer();
//==========================================================================

//VARIABLE SHADOWING-->Inner variable hides outer variable

// Global variable
const name = "Global";

function test(){

    // Local variable with SAME name
    const name = "Local";

    // Print local variable
    console.log(name);

}

// Call function
test();

// Print global variable
console.log(name);