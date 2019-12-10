// Dependencies
// =============================================================
var path = require("path");

// var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // 
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/business.html"));
  });


  app.get("/", function(req, res) {

    // if(req.dealer){
    //   res.redirect("/");
    // }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/application", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/application.html"))
  });

  app.get("/service", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/commonpage.html"))
  });

//   app.get("/profile", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "..public/profile.html"))
//   })
};