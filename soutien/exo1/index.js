window.addEventListener("DOMContentLoaded", function(){
    let user = {
        firstname : "Yeppy",
        lastname : "Yep"
    };
    
    console.log(user.firstname);
    console.log(user.lastname);
    user.firstname = "Yeppiidy";
    console.log(user.firstname);
})