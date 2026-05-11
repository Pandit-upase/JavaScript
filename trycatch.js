try{

    let serverResponse = null;

    // Simulate API failure
    if(serverResponse === null){

        throw new Error("Server not responding");

    }

    console.log(serverResponse);

}
catch(error){

    // Handle API error
    console.log(error.message);

}finally{
    console.log("Finally always runs");
}