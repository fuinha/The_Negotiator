function Validate() {
    var username = $("#username").val();
    var password = $("#password").val();
    event.preventDefault();
    //username field empty
    if (username == "") {
        alert("enter username");
        console.log("Username is missing!");
    }
    //username field has less than 6 characters
    else if (username.length < 6) {
        alert("username must be atleast 6 charachers");
        console.log("less than 6 characters enetered username")
    }
    //username field was entered correctly
    else if (username) {
        console.log("username was entered correctly");
    }
    //password field empty
    if (password == "") {
        alert("enter password");
        console.log("password is missing!")
    }
    //password field less han 8 characters
    else if (password.length < 8) {
        alert("password must be atleast 8 characters");
        console.log("password missing 8 characters")
    }
    //once login info is correct, new html profile 2 page was uploaded
    else if (password) {
        window.location = "profile2.html";
        console.log("login successful");
    }
    return false;
}
/*$('#signup-btn').on('click', function SignUp () {
    window.location = "signUp.html";
    console.log("sign up page!")
})*/