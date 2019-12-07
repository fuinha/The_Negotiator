// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // 
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/business.html"));
  });


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/application", function(req,res) {
    res.sendFile(path.join(__dirname, "..public/application.html"))
  });

  app.get("/service", function(req,res) {
    res.sendFile(path.join(__dirname, "..public/commonpage.html"))
  });s

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "..public/profile.html"))
  })
};