//importing files
var db = require("../models");

module.exports = router => {

    //get all contacts
    router.get("/api/quotes", (req,res) => {
        db.dealer.findAll({
            include : [db.Application, db.dealer]
        }).then (dbQuote => {
            res.json(dbQuote);
        });
    });

    //get contacts by id - primary function in passport attached to login info
    router.get("/api/quotes/:id", (req,res) => {
        console.log(req.user)
        db.dealer.findOne({
            where : {
                id : req.user.id
            }, include : [db.Application, db.dealer]
        }).then (dbQuote => {
            res.json(dbQuote);
        });
    });

    //ability to make contact information
    router.post("/api/quotes", (req, res) => {
        console.log(req.body)
        db.dealer.create(req.body).then(dbdealer => {
            res.json(dbQuote);
        });
    });

    //ability to change contact information
    router.put("/api/quotes/:id", (req, res)=> {
        db.dealer.update(req.body, {
            where: {
                id: req.user.id
            }
        }).then(dbQuote => {
            res.json(dbQuote);
        });
    });

    //ability to delete contact information
    router.delete("/api/quotes/:id", (req,res) => {
        db.dealer.destroy({
            where: {
                id: req.user.id
            }
        }).then(dbquote => {
            res.json(dbquote)
        });
    });

};