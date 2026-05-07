const user = {

    username: "hitesh",
    price: 999,

    welcomeMessage: function(){

        console.log(`${this.username}, welcome to website`);

        console.log(this);

    }

}
//user.welcomeMessage();

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function chai(){

    let username = "hitesh";

    console.log(this.username);

}
chai();
//===============-=-0-00=0-0-0-=0-0-09-9-=0===============================================


const student = {

    username: "Rahul",

    // Normal object method
    greet(){

        console.log(this.username);

    }

};

// Call method
student.greet();
//=======================================================================

const arrowFunction = () => {

    // Arrow function borrows outer this
    console.log(this);

};

// Call arrow function
arrowFunction();