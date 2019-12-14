//importing files
var db = require("../models");

module.exports = router => {

    //get all contacts
    router.get("/api/contact", (req,res) => {
        db.dealer.findAll({
            include : [db.Application, db.User]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });

    //get contacts by id - primary function in passport attached to login info
    router.get("/api/contact/:id", (req,res) => {
console.log(req.user.id)
        db.dealer.findOne({
            where : {
                id : req.user.id
            }, include : [db.Application, db.User]
        }).then (dbdealer => {
            res.json(dbdealer);
        });
    });

    //ability to make contact information
    router.post("/api/contact", (req, res) => {
        console.log(req.body)
        db.dealer.create(req.body).then(dbdealer => {
            console.log(dbdealer)
            res.json(dbdealer);
        });
    });

    //ability to change contact information
    router.put("/api/contact/:id", (req, res)=> {
        db.dealer.update(req.body, {
            where: {
                id: req.user.id
            }
        }).then(dbdealer => {
            res.json(dbdealer);
        });
    });

    //ability to delete contact information
    router.delete("/api/contact/:id", (req,res) => {
        db.dealer.destroy({
            where: {
                id: req.user.id
            }
        }).then(dbdealer => {
            res.json(dbdealer)
        });
    });

};