// Dependencies
// =============================================================
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes ust handles the HTML page that the user gets sent to.

  // 
  app.get("/application", function(req,res) {
    res.sendFile(path.join(__dirname, "..public/application.html"))
  });

  app.get("/service", function(req,res) {
    res.sendFile(path.join(__dirname, "..public/commonpage.html"))
  });

  app.get("/profile", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "..public/profile.html"))
  })

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/member");
    }
    res.sendFile(path.join(__dirname, "../public/signUp.html"));
  });
  

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/member");
    }
    res.sendFile(path.join(__dirname, "../public/business.html"));
  });

  
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/member", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

};