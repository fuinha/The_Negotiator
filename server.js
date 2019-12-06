//Dependencies
const express = require("express");

//setting up express app
const app = express();
let PORT = process.env.PORT || 9754;

//importing databases from models
let db = require("./models");

//setting up express app to handle data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static directory
app.use(express.static("public"));

//      Routes
//====================
// require("./routes/html-routes.js")(app);
// require("./routes/application-routes.js")(app);
// require("./routes/contact-routes.js")(app);
// require("./routes/quote-routes.js")(app);

//syncing sequelize models and starting express app
db.sequelize.sync({ force: false }).then( function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT "+PORT);
    });
});
