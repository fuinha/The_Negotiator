$(document).ready(function () {
   // Getting references to our form and inputs
   var loginForm = $("form.login");
   var emailInput = $("input#email-input");
   var passwordInput = $("input#password-input");

   // When the form is submitted, we validate there's an email and password entered
   loginForm.on("submit", function (event) {
      event.preventDefault();
      var userData = {
         email: emailInput.val().trim(),
         password: passwordInput.val().trim()
      };

      if (!userData.email || !userData.password) {
         return;
      }
      var url = window.location.search;
      console.log(url)
      console.log(window.location.href)

      // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
      function loginUser(email, password, name) {
         $.post("/api/login", {
            email: email,
            password: password,
            name: name
         })
            .then(function () {
               window.location.replace("/member/:id");
               // If there's an error, log the error
            })
            .catch(function (err) {
               console.log(err);
            });
      }

   });
});